import { FaUserAlt } from "react-icons/fa";
import styles from './ProfileAccess.module.scss';

const ProfileAccess = () => {
  return (
    <div className={styles.accessContainer}>
      <div className={styles.user}>
        <FaUserAlt size='100%'/>
      </div>
      <p>Faça <a>Login</a> ou <a>Cadastre-se</a></p>
    </div>
  )
}

export default ProfileAccess;