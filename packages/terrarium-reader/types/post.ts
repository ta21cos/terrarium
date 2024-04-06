import { PostDetailResponse, PostResponse } from "../infrastructures/api/type";

export type PostSummary = Omit<PostResponse, "tags"> & { tags: string[] };

export type PostDetail = Omit<PostDetailResponse, "tags"> & { tags: string[] };
