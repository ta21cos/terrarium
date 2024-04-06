import { client, endpoint } from "../infrastructures/api";
import { PostDetailResponse } from "../infrastructures/api/type";
import { makePostObject } from "./makePostObject";

export const fetchPostsByTag = async ({ tag }: { tag: string }) => {
  const { contents } = await client.getList<PostDetailResponse>({
    endpoint,
    queries: {
      filters: `tags[contains]${tag}`,
    },
  });

  const posts = contents.map(makePostObject);

  return { posts };
};
