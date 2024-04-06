import { Metadata } from "next";

import { PostListView } from "../components/PostListView";
import { TERRARIUM_LINK } from "../constants/links";

const Home = () => {
  return <PostListView />;
};

export default Home;

export const metadata: Metadata = {
  metadataBase: new URL(TERRARIUM_LINK),
  title: "terrarium",
  description: "tellusium's diary",
  openGraph: {
    images: [`/ogp.png`],
  },
};
