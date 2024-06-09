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
          <div className="comments-avatar"></div>
          <p className="comment-name">{comment.name}</p>
          <span className="comment-date">{formatDate(comment.timestamp)}</span>
          <p className="comment-text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;