import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {year} UIKit. Built with React.</p>
        <nav aria-label="Footer navigation">
          <ul className={styles.links}>
            <li><a href="#" className={styles.link}>Docs</a></li>
            <li><a href="#" className={styles.link}>GitHub</a></li>
            <li><a href="#" className={styles.link}>License</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
