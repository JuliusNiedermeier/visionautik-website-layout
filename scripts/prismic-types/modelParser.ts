import { SliceVariation } from ".";
import convertType from "./convertType";

export type ModelType = { field: string; type: string };

export function getPrismicTypesFromModel(model) {
  const variations = model.variations.map((variation) => ({
    variation: variation.id,
    fields: getFieldTypes(variation.primary),
  }));

  return { id: model.id, variations };
}

export function getSliceVariations(model): Array<SliceVariation> {
  return model.variations || [];
}

export function getFieldTypes(fields): ModelType[] {
  return Object.keys(fields)
    .filter((key) => typeof fields[key].type == "string")
    .map((key) => ({ field: key, type: convertType(fields[key].type) }));
}

export function getTypesFromVariation(variation) {
  return getFieldTypes(variation.primary);
}

export function getTypesFromCustomType(model) {
  return getFieldTypes(model.json.Main);
}
