import PropTypes from 'prop-types';
import avatar from '../../assets/профиль.png';
import styles from './Profile.module.css';

function Profile({
  username = 'Ульяна',
  description = 'Описание профиля',
}) {
  return (
    <section className={styles.profile}>
      <div className={styles.identity}>
        <img src={avatar} alt="" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
      </div>
      <div className={styles.info}>
        <h2 className={styles.label}>Профиль:</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  description: PropTypes.string,
};

export default Profile;
