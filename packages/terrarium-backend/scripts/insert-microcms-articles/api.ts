import { createClient } from "microcms-js-sdk";

type PostDetailResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  uid: string;
  og_url: string;
  tags: string;
  content: string;
};

export const endpoint = "blog";

export const client = createClient({
  serviceDomain: "terrarium",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});

const makePostObject = (response: PostDetailResponse) => ({
  ...response,
  tags: response.tags.split(",").map((t) => t.trim()),
});

export const fetchPosts = async () => {
  const { contents } = await client.getList<PostDetailResponse>({
    endpoint,
    queries: {
      orders: "-createdAt",
      fields:
        "id,createdAt,updatedAt,publishedAt,title,uid,og_url,tags,content",
    },
  });
  const posts = contents.map(makePostObject);

  return { posts };
};
