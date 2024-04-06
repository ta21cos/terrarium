import { client, endpoint } from "../infrastructures/api";
import { PostDetailResponse } from "../infrastructures/api/type";
import { makePostObject } from "../libs/makePostObject";

export const fetchPost = async ({ uid }: { uid: string }) => {
  const { contents } = await client.getList<PostDetailResponse>({
    endpoint,
    queries: {
      limit: 1,
      filters: `uid[equals]${uid}`,
    },
  });

  const postResponse = contents.at(0);
  if (!postResponse) throw new Error();

  const post = makePostObject(postResponse);

  return { post };
};
