import { TagDetailView } from "../../../components/TagDetailView";

type Props = {
  params: { tag: string };
};

const TagDetailPage = async ({ params }: Props) => {
  return <TagDetailView tag={params.tag} />;
};

export default TagDetailPage;

export async function generateMetadata({ params }: Props) {
  return {
    title: `Tag: "${params.tag}" | terrarium`,
    description: `Tag "${params.tag}" の記事一覧`,
  };
}
