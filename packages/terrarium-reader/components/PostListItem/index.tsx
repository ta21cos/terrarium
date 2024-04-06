import Link from "next/link";
import Image from "next/image";

import { PostSummary } from "../../types/post";
import { TagList } from "../TagList";

import * as styles from "./index.css";

export const PostListItem = ({ post }: { post: PostSummary }) => {
  return (
    <>
      {/* hr is not shown when first child */}
      <hr className={styles.border} />
      <article>
        <Link href={`/posts/${post.uid}`} className={styles.titleContainer}>
          {post.og_url ? (
            <div className={styles.imageContainer}>
              <Image
                src={post.og_url}
                alt={`${post.title} のイメージ`}
                fill
                className={styles.image}
              />
            </div>
          ) : (
            <></>
          )}
          <h2 className={styles.title}>{post.title}</h2>
          <span className={styles.date}>{post.publishedAt}</span>
        </Link>
        <div className={styles.tagsContainer}>
          <TagList tags={post.tags} />
        </div>
      </article>
    </>
  );
};
