import PropTypes from 'prop-types';
import styles from './ArticlePreview.module.css';

function ArticlePreview({ image, title, description }) {
  return (
    <article
      className={styles.preview}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

ArticlePreview.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ArticlePreview;
