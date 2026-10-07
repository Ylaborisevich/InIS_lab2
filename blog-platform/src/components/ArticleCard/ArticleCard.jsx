import { useState } from 'react';
import PropTypes from 'prop-types';
import LikeButton from '../LikeButton/LikeButton';
import CommentInput from '../CommentInput/CommentInput';
import commentIcon from '../../assets/comment.png';
import shareIcon from '../../assets/share.png';
import styles from './ArticleCard.module.css';

function ArticleCard({
  image,
  title,
  description,
  initialLikes = 0,
  username = 'Ульяна',
}) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const toggleComment = () => {
    setIsCommentOpen((prev) => !prev);
  };

  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <LikeButton initialLikes={initialLikes} />
          <button
            type="button"
            className={styles.iconButton}
            aria-label="Комментарии"
            aria-expanded={isCommentOpen}
            onClick={toggleComment}
          >
            <img src={commentIcon} alt="" className={styles.icon} />
          </button>
          <button type="button" className={styles.iconButton} aria-label="Поделиться">
            <img src={shareIcon} alt="" className={styles.icon} />
          </button>
        </div>
        {isCommentOpen && (
          <div className={styles.commentWrap}>
            <CommentInput username={username} />
          </div>
        )}
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  initialLikes: PropTypes.number,
  username: PropTypes.string,
};

export default ArticleCard;
