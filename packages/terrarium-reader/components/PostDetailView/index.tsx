import Image from "next/image";

import { TagList } from "../TagList";
import { fetchPost } from "../../libs/fetchPost";

import {
  container,
  content,
  date,
  headImage,
  headImageContainer,
  tagsContainer,
  title,
} from "./index.css";

export const PostDetailView = async ({ uid }: { uid: string }) => {
  const { post } = await fetchPost({ uid });

  return (
    <>
      {post.og_url ? (
        <div className={headImageContainer}>
          <Image
            src={post.og_url}
            alt={`${post.title} のイメージ`}
            fill
            className={headImage}
          />
        </div>
      ) : (
        <></>
      )}
      <div className={container}>
        <h1 className={title}>{post.title}</h1>
        <h2 className={date}>{post.publishedAt}</h2>
        <div className={tagsContainer}>
          <TagList tags={post.tags} />
        </div>
        <div
          className={`${content} blog-content`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
};
