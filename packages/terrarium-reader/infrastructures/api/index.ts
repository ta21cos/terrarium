import { createClient } from "microcms-js-sdk";

export const endpoint = "blog";

export const client = createClient({
  serviceDomain: "terrarium",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});
