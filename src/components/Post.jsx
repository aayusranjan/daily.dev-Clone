import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Comment from "./comment-popup/Comment";
import LikeUpdate from './like-update/likeUpdate'

import "./Post.css";
const Post = ({ post: { title, body, imgUrl, author }, index }) => {
  return (
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt="post" />
      {/* <p className="text-content">{body}</p> */}
      {/* <div className="info">
        <h4>Written by: {author}</h4>
      </div> */}
      <div className="icons">
        <LikeUpdate />
        <Comment />
        <BookmarkBorderIcon />
      </div>
    </div>
  );
};

export default Post;
