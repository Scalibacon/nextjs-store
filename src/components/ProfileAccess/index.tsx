import { FaUserAlt } from "react-icons/fa";
import ProfileIcon from "../ProfileIcon";
import styles from './ProfileAccess.module.scss';

const ProfileAccess = () => {
  return (
    <div className={styles.accessContainer}>
      <ProfileIcon/>
      <p>Faça <a>Login</a> ou <a>Cadastre-se</a></p>
    </div>
  )
}

export default ProfileAccess;