import React from "react";
import "./Comment.scss";

const Comment = ({ comments }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment__avatar"></div>
          <div className="comment__outer">
          <div className="comment__container">
          <p className="comment__name">{comment.name}</p>
          <span className="comment__date">{formatDate(comment.timestamp)}</span>
          </div>
          <p className="comment__text">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
