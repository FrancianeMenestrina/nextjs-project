import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Head from "next/head";

const Index = (props) => {
  return (
    <div>
      <Header />
      <Head>
        <title>Blog com NextJS!</title>
      </Head>
      {props.data.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link href={"/blog/" + post.id}>{post.title}</Link>
            </h3>
            <p>Fake short description</p>
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      currentData: new Date().getTime(),
      data,
    },
  };
}

export default Index;
