import React from "react";
import { Section } from "@kickstartds/base";

function PostBook(props) {
  return (
    <Section>
      <form onSubmit={props.handleSubmit}></form>
    </Section>
  );
}

export default PostBook;
