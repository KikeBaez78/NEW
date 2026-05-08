import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Components', to: '/components' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="8" fill="#2563eb" />
              <path d="M8 14h12M14 8v12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span>UIKit</span>
          </Link>
        </div>

        <ul className={styles.links}>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={[styles.link, location.pathname === to ? styles.active : '']
                  .filter(Boolean)
                  .join(' ')}
                aria-current={location.pathname === to ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link to="/login" className={styles.loginBtn}>Sign in</Link>
        </div>
      </nav>
    </header>
  );
}
