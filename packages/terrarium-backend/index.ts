import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
// codegen が package 内の node_modules に型定義を生成するので、そのファイルを指定する
import type { DB } from "./node_modules/kysely-codegen/dist/db.d.ts";

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});

db.selectFrom("article")
  .selectAll()
  .execute()
  .then((rows) => {
    console.log({ rows });
  });
