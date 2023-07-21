import React from "react";

const Index = (props) => {
  return (
    <div>
      <h1>Olá Next!</h1>
      {props.data.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
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
