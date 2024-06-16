
import "./CommentForm.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import React, { useState } from "react";
// import api from '../../utils/api';

const CommentForm = () => {
  return (
    <form className="comment-form">
      <div className="comment-form__left">
        <img className="comment-form__avatar" src={avatar} alt="avatar" />
      </div>
      <div className="comment-form__right">
        <label htmlFor="comment" className="comment-form__label">
          JOIN THE CONVERSATION
        </label>
        <div className="comment-form__container">
          <textarea
            className="comment-form__textarea"
            placeholder="Add a new comment"
          ></textarea>

          <div class="comment-form__button">
            <img
              className="comment-form__icon"
              src={commentIcon}
              alt="comment button"
            />
            <button className="comment-form__trigger">COMMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
// const CommentForm = ({ videoId }) => {
//   const [name, setName] = useState('');
//   const [comment, setComment] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newComment = {
//       name,
//       comment,
//     };

//     api.post(`/videos/${videoId}/comments`, newComment)
//       .then(response => {
//         // Refresh or add the new comment to the state (you can lift state up to App)
//         console.log("Comment added:", response.data);
//       })
//       .catch(error => {
//         console.error("Error adding comment:", error);
//       });
//   };

//   return (
//     <form className="comment-form" onSubmit={handleSubmit}>
//       <textarea 
//         placeholder="Add a public comment..."
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//       ></textarea>
//       <button type="submit">Comment</button>
//     </form>
//   );
// };

// export default CommentForm;