import { useState } from 'react';
import PropTypes from 'prop-types';
import avatar from '../../assets/профиль.png';
import styles from './CommentInput.module.css';

function CommentInput({ username = 'Ульяна' }) {
  const [comment, setComment] = useState(
    'Очень интересная мысль у автора! Благодарю за такой глубокий анализ! Жду выхода следующих статей!',
  );

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!comment.trim()) {
      return;
    }
    console.log('Комментарий:', comment);
    setComment('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <img src={avatar} alt="" className={styles.avatar} />
        <span className={styles.username}>{username}</span>
      </div>
      <div className={styles.inputBox}>
        <textarea
          className={styles.textarea}
          value={comment}
          onChange={handleChange}
          placeholder="Напишите комментарий..."
          rows={4}
        />
        <button type="submit" className={styles.submit}>
          Опубликовать
        </button>
      </div>
    </form>
  );
}

CommentInput.propTypes = {
  username: PropTypes.string,
};

export default CommentInput;
