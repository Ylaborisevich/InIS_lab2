import { useState } from 'react';
import PropTypes from 'prop-types';
import heartIcon from '../../assets/heart.png';
import styles from './LikeButton.module.css';

function LikeButton({ initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setLiked(true);
    }
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      aria-label={liked ? 'Убрать лайк' : 'Поставить лайк'}
      aria-pressed={liked}
    >
      <img
        src={heartIcon}
        alt=""
        className={liked ? styles.heartLiked : styles.heart}
      />
      <span className={styles.count}>{likes}</span>
    </button>
  );
}

LikeButton.propTypes = {
  initialLikes: PropTypes.number,
};

export default LikeButton;
