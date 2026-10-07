import PropTypes from 'prop-types';
import logo from '../../assets/images.png';
import avatar from '../../assets/профиль.png';
import styles from './Header.module.css';

function Header({ username = 'Ульяна' }) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="blog" className={styles.logo} />
      <div className={styles.user}>
        <span className={styles.username}>{username}</span>
        <img src={avatar} alt="" className={styles.avatar} />
      </div>
    </header>
  );
}

Header.propTypes = {
  username: PropTypes.string,
};

export default Header;
