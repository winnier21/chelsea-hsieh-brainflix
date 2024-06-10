import React from "react";
import "./CommentForm.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";

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
