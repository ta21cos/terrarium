import { format } from "date-fns";

import { PostResponse } from "../infrastructures/api/type";

type TagsAndPublishedAt = Pick<PostResponse, "tags" | "publishedAt">;

type Output<T extends TagsAndPublishedAt> = Omit<T, "tags"> & {
  tags: string[];
};

export const makePostObject = <T extends TagsAndPublishedAt>(
  response: T,
): Output<T> => ({
  ...response,
  tags: response.tags.split(",").map((t) => t.trim()),
  publishedAt: format(new Date(response.publishedAt), "MMMM d, yyyy"),
});
