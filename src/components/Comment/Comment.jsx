import React from "react";
import "./Comment.scss";

const Comment = ({ comments }) => {
  return (
    <div> {comments.map((comment) => (
      <div>
        <div className ="comments-avatar"></div>
        <p>{comment.name}</p>
        <span>{comment.timestamp}</span>
        <p>{comment.comment}</p>
      
      </div>
      
    ))}
    </div>
   
 
);
};
export default Comment
