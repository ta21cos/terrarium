export type PostResponse = {
  id: string;
  title: string;
  uid: string;
  og_url: string;
  tags: string;
  publishedAt: string;
};

export type PostDetailResponse = {
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
