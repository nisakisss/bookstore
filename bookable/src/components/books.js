import React from "react";

function Books(props) {
  return (
    <>
      {props.books.map((books) => {
        return (
          <div key={books.id}>
            <h1>{books.title}</h1>
            <p>{books.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default Books;
