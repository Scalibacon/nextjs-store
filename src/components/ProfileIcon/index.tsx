import { FaUserAlt } from "react-icons/fa"
import styles from './ProfileIcon.module.scss';

const ProfileIcon = () => {
  return (
    <div className={styles.profileIcon}>
      <FaUserAlt size='100%'/>
    </div>
  )
}

export default ProfileIcon;