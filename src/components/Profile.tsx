import styles from '../styles/components/Profile.module.css';

export function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wallisonstorck.png" alt="Avatar"/>
      <div>
        <strong>Wallison Storck</strong>
        <p>
          <img src="icons/levelup.svg" alt="Level Up!"/>
          Level 1
        </p>
      </div>
    </div>
  )
}