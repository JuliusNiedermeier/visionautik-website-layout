import { join } from "path";
import { writeFile } from "fs/promises";
import { loadJSONModels } from "./modelLoader";
import {
  getTypesFromCustomType,
  getTypesFromVariation,
  getSliceVariations,
} from "./modelParser";
import {
  generateInterfaces,
  generateModelExporStatement,
  generateModelImportStatements,
} from "./codeGenerator";
import prettier from "prettier";

export type SliceModel = {
  id: string;
  type: string;
  name: string;
  description: string;
  variations: Array<SliceVariation>;
};

export type SliceVariation = {
  id: string;
  name: string;
  docURL: string;
  version: string;
  description: string;
  primary: any;
};

async function main() {
  const customTypeModels = await loadJSONModels(
    join(__dirname, "../../customtypes"),
    "index.json"
  );

  const sliceModels = await loadJSONModels(
    join(__dirname, "../../slices"),
    "model.json"
  );

  const customTypes = customTypeModels.map((model) => ({
    id: model.json.id,
    type: "CustomType",
    fields: getTypesFromCustomType(model.json),
  }));

  const sliceVariationTypes = [];

  sliceModels.forEach((model) => {
    sliceVariationTypes.push(
      ...getSliceVariations(model.json).map((variation) => ({
        id: model.json.id,
        type: "Slice",
        variation: variation.id,
        fields: getTypesFromVariation(variation),
      }))
    );
  });

  const modelImportStatements = generateModelImportStatements([
    ...customTypeModels.map((model) => ({
      name: model.json.id,
      path: model.path,
    })),
    ...sliceModels.map((model) => ({
      name: model.json.id,
      path: model.path,
    })),
  ]);

  const modelExportStatement = generateModelExporStatement([
    ...customTypeModels.map((model) => model.json.id),
    ...sliceModels.map((model) => model.json.id),
  ]);

  const interfaces = generateInterfaces([
    ...customTypes,
    ...sliceVariationTypes,
  ]);

  const file = prettier.format(
    modelImportStatements.join("") + modelExportStatement + interfaces.join("")
  );

  await writeFile(join(__dirname, "../../customtypes/index.ts"), file, "utf-8");
}

main();
