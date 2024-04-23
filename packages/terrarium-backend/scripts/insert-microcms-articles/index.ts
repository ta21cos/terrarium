import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { DB } from "../../node_modules/kysely-codegen/dist/db.d.ts";

import "dotenv/config";
import { fetchPosts } from "./api";

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});

const main = async () => {
  const { posts } = await fetchPosts();

  const promises = posts.map(async (post) => {
    const existedPost = await db
      .selectFrom("article")
      .where("uid", "=", post.uid)
      .executeTakeFirst();

    if (existedPost) {
      console.log(`Article ${post.uid} already exists`);
      return;
    }

    const {
      content,
      createdAt,
      og_url: ogpUrl,
      publishedAt,
      tags,
      title,
      uid,
      updatedAt,
    } = post;
    const result = await db
      .insertInto("article")
      .values([
        {
          content,
          createdAt: new Date(createdAt),
          ogpUrl,
          publishedAt: new Date(publishedAt),
          tags,
          title,
          uid,
          updatedAt: new Date(updatedAt),
        },
      ])
      .returning(["id", "uid"])
      .executeTakeFirst();
    console.log(`Inserted article ${result?.uid}`);
  });

  await Promise.all(promises);
};

main();

process.exit();
