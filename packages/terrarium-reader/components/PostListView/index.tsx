import { fetchPosts } from "../../libs/fetchPosts";
import { PostListItem } from "../PostListItem";

import { container } from "./index.css";

export const PostListView: React.FC = async () => {
  const { posts } = await fetchPosts();

  return (
    <div className={container}>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};
