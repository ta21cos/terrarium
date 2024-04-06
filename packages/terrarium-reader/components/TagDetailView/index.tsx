import { fetchPostsByTag } from "../../libs/fetchPostsByTag";
import { PostListItem } from "../PostListItem";
import { container } from "../PostListView/index.css";

import { title } from "./index.css";

export const TagDetailView = async ({ tag }: { tag: string }) => {
  const { posts } = await fetchPostsByTag({ tag });
  return (
    <>
      <h1 className={title}>タグ &quot;{tag}&quot; の記事一覧</h1>
      <div className={container}>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
