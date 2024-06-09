import React from 'react';
import './CommentForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import commentIcon from '../../assets/Icons/add_comment.svg';


const CommentForm =() => {
  return (
    <form className='comment-form'>
        <div >
            <img className='comment-form__avatar' src={avatar} alt="avatar"/>
        </div>
        <label htmlFor='comment' className='comment-form__label'>JOIN THE CONVERSATION</label>
        <input className='comment-form__input' placeholder='Add a new comment'></input>
        <div class="comment-form__button">
            <img className='comment-form__button--icon' src={commentIcon} alt="comment button" />
            <button className='comment-form__button--trigger'>COMMENT</button>
        </div>
        </form>
  )
}

export default CommentForm