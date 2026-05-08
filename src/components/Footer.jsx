import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>🔧 <strong>Fix<span className={styles.accent}>Movil</span> TJ</strong></span>
          <p className={styles.tagline}>Reparación profesional de celulares en Tijuana, BC.</p>
        </div>
        <div className={styles.links}>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#resenas">Reseñas</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a
          href="https://wa.me/526641991538"
          className={styles.waBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar por WhatsApp
        </a>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} FixMovil TJ · Tijuana, BC, México</p>
      </div>
    </footer>
  );
}
