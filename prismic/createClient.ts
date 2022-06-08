import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import { endpoint } from "./index";

export default function createClient(config /*= {}*/) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
