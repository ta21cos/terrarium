alter table "public"."article" add column "createdAt" timestamptz
 not null default now();
