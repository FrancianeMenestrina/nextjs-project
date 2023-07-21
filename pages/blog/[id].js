import React from "react";
import Header from "../../components/Header";
import Head from "next/head";

const Post = ({ data }) => {
  return (
    <div>
      <Header />
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>Post: {data.title}</h1>
      <p>{data.body}</p>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((post) => {
    return { params: { id: "" + post.id } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Post;
