import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => (
  <article>
    <h3>
      <Link to={`/${post.slug}`}>{post.title}</Link>
    </h3>
    <button type="button" style={{ display: "block" }}>
      {post.tags}
    </button>
    <small>{post.date}</small>
    <br />
    <br />
    <p>{post.excerpt}</p>
    <Link to={`/${post.slug}`}>read this post &rarr;</Link>
  </article>
);

export default PostPreview;
