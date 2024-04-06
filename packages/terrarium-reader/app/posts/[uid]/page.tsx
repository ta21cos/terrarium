import { Metadata } from "next";

import { PostDetailView } from "../../../components/PostDetailView";
import { fetchPost } from "../../../libs/fetchPost";
import { TERRARIUM_LINK } from "../../../constants/links";
import { removeTag } from "../../../libs/removeTag";

type Props = {
  params: { uid: string };
};

const PostDetailPage = async ({ params }: Props) => {
  return <PostDetailView uid={params?.uid ?? ""} />;
};

export default PostDetailPage;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = await fetchPost({ uid: params?.uid ?? "" });

  return {
    metadataBase: new URL(TERRARIUM_LINK),
    title: `${post.title} | terrarium`,
    description: removeTag(`${post.content.slice(0, 80)}...`),
    openGraph: {
      images: [post.og_url || "/ogp.png"],
    },
  };
}
