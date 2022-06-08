export default function convertType(prismicType: string) {
  switch (prismicType) {
    case "UID":
      return "string";
      break;
    case "StructuredText":
      return "[]";
      break;
    case "Number":
      return "number";
      break;
    default:
      return "any";
      break;
  }
}
