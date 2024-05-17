import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}></div>
      <b>HKS Parts USA</b>
    </header>
  );
}
