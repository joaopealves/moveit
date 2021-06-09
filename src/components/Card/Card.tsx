// import { useSession } from 'next-auth/client';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardPosition}>{props.position}</div>
      <div className={styles.cardUserProfile}>
        <img
          src="https://avatars.githubusercontent.com/u/56173070?v=4"
          alt="Profile picture"
        />
        <div>
          <strong>Jp</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level {18}
          </p>
        </div>
      </div>
      <div className={styles.cardChallenges}>121 completos</div>
      <div className={styles.cardExperience}>15400 xp</div>
    </div>
  );
}
