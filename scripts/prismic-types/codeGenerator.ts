import { ModelType } from "./modelParser";

export function generateModelImportStatements(
  models: { name: string; path: string }[]
) {
  return models.map((model) => {
    const path = model.path.replace(/\\/g, "/");
    return `import ${model.name} from "${path}";`;
  });
}

export function generateModelExporStatement(models: string[]) {
  return `export {${models.join(",")}};`;
}

function snakeToPascal(string: string) {
  return string
    .split("_")
    .map((word) => word.replace(/^\w/, (c) => c.toUpperCase()))
    .join("");
}

function camelToPascal(string: string) {
  return string.replace(/^\w/, (c) => c.toUpperCase());
}

function generateInterfaceName(type: "CustomType" | "Slice", id, variation) {
  return `${type}${snakeToPascal(id)}${camelToPascal(variation || "")}`;
}

function generateProperties(fields: ModelType[]) {
  return fields.map(({ field, type }) => `${field}:${type};`).join("");
}

export function generateInterfaces(types) {
  return types.map((type) => {
    const name = generateInterfaceName(type.type, type.id, type.variation);
    const properties = generateProperties(type.fields);
    return `export interface I${name} {${properties}}`;
  });
}
