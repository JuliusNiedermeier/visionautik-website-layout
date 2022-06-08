import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import linkResolver from "./linkResolver";
import createClient from "./createClient";

const endpoint = sm.apiEndpoint;
const repositoryName = prismic.getRepositoryName(endpoint);

export { endpoint, repositoryName, linkResolver, createClient };
