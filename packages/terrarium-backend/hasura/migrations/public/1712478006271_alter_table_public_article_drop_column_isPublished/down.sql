alter table "public"."article" alter column "isPublished" drop not null;
alter table "public"."article" add column "isPublished" bool;
