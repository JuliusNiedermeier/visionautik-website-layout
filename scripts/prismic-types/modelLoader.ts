import { readdir } from "fs/promises";
import { join } from "path";

export async function loadJSONModels(directory, fileName) {
  const paths = (await readdir(directory, { withFileTypes: true }))
    .filter((dirent) => !dirent.isFile())
    .map((dirent) => join(directory, dirent.name, fileName));

  return (
    await Promise.all(
      paths.map(async (path) => ({ json: await importJSONModel(path), path }))
    )
  ).filter((model) => model);
}

export async function importJSONModel(path) {
  try {
    return (await import(path)).default;
  } catch {
    console.warn(`Cannot find model inside ${path}`);
  }
}
