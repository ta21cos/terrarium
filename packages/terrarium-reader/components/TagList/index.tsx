import Link from "next/link";

import * as styles from "./index.css";

type Props = {
  tags: string[];
};

export const TagList = ({ tags }: Props) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`} className={styles.tag}>
          {tag}
        </Link>
      ))}
    </div>
  );
};
