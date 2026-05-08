import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>🔧</span>
          <span className={styles.logoText}>Fix<span className={styles.accent}>Movil</span> TJ</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/526641234567"
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
        </ul>

        <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menú">
          <span className={open ? styles.burgerX : ''} />
          <span className={open ? styles.burgerX2 : ''} />
          <span className={open ? styles.burgerX3 : ''} />
        </button>
      </div>
    </nav>
  );
}
