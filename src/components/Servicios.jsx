import { motion } from 'framer-motion';
import styles from './Servicios.module.css';

const servicios = [
  { icon: '📱', nombre: 'Pantalla rota', precio: 'Desde $700', desc: 'iPhone, Samsung, Xiaomi, Motorola y más. Pantalla original o compatible.', color: '#FF006E' },
  { icon: '🔋', nombre: 'Batería', precio: 'Desde $350', desc: 'Recupera la duración de tu batería. Cambio rápido con garantía.', color: '#8338EC' },
  { icon: '⚡', nombre: 'Puerto de carga', precio: 'Desde $400', desc: 'No carga bien tu celular? Lo reparamos en el día.', color: '#3A86FF' },
  { icon: '📸', nombre: 'Cámara', precio: 'Desde $500', desc: 'Cámara trasera o frontal. Fotos nítidas como el primer día.', color: '#FFBE0B' },
  { icon: '💧', nombre: 'Daño por agua', precio: 'Desde $300', desc: 'Diagnóstico incluido. Limpieza profunda y recuperación de datos.', color: '#06D6A0' },
  { icon: '🔊', nombre: 'Bocina / Micrófono', precio: 'Desde $300', desc: 'Sin sonido o micrófono malo? Lo dejamos como nuevo.', color: '#FB5607' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Servicios() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Qué reparamos?
        </motion.p>
        <motion.h2
          className={`section-title ${styles.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Servicios & <span className="gradient-text">Precios</span>
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Precios transparentes · Sin sorpresas · Diagnóstico gratis
        </motion.p>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {servicios.map(s => (
            <motion.div key={s.nombre} className={styles.card} variants={card}>
              <div className={styles.iconWrap} style={{ '--c': s.color }}>
                <span className={styles.icon}>{s.icon}</span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.nombre}>{s.nombre}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
              <div className={styles.footer}>
                <span className={styles.precio} style={{ color: s.color }}>{s.precio} MXN</span>
                <a
                  href={`https://wa.me/526641234567?text=Hola! Me interesa el servicio de ${s.nombre}`}
                  className={styles.ask}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.bannerText}>
            <h3>¿No ves tu reparación?</h3>
            <p>Escríbenos por WhatsApp y te damos presupuesto gratis.</p>
          </div>
          <a
            href="https://wa.me/526641234567"
            className={styles.bannerBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
