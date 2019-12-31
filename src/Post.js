import React from "react";

const Post = ({ title, body }) => {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #CCC",
        borderRadius: "4px",
        padding: "1rem",
        marginBottom: "0.5rem"
      }}
    >
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Post;
