import { client, endpoint } from "../infrastructures/api";
import { PostResponse } from "../infrastructures/api/type";
import { makePostObject } from "./makePostObject";

export const fetchPosts = async () => {
  const { contents } = await client.getList<PostResponse>({
    endpoint,
    queries: {
      orders: "-createdAt",
      fields: "id,title,og_url,uid,tags,publishedAt",
    },
    customRequestInit: {
      next: {
        revalidate: 1800,
      },
    },
  });
  const posts = contents.map(makePostObject);

  return { posts };
};
