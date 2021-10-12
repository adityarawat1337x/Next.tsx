import { NextPage } from "next";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }: { params: any }) {
  const postData = getPostData(params.id);
  console.log(params);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({
  postData,
}: {
  postData: { title: String; id: String; date: String };
}) => {
  return (
    <Layout home={false}>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export default Post;
