import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Galeria.module.css';

const casos = [
  {
    id: 1,
    titulo: 'Pantalla iPhone 13',
    modelo: 'iPhone 13 Pro Max',
    antesColor: '#1a0000',
    despuesColor: '#0a2010',
    icono: '📱',
    precio: '$850 MXN',
    tiempo: '45 min',
  },
  {
    id: 2,
    titulo: 'Batería Samsung S22',
    modelo: 'Samsung Galaxy S22',
    antesColor: '#1a0800',
    despuesColor: '#071A0E',
    icono: '🔋',
    precio: '$420 MXN',
    tiempo: '30 min',
  },
  {
    id: 3,
    titulo: 'Puerto de carga Xiaomi',
    modelo: 'Xiaomi Redmi Note 11',
    antesColor: '#150500',
    despuesColor: '#0a2015',
    icono: '⚡',
    precio: '$380 MXN',
    tiempo: '1 hora',
  },
];

function CasoCard({ caso }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.compareWrap}>
        <div
          className={`${styles.side} ${styles.antes}`}
          style={{ background: `radial-gradient(circle at 40% 40%, ${caso.antesColor}, #040D07)` }}
        >
          <div className={styles.phoneIcon}>{caso.icono}</div>
          <div className={styles.crack}>
            <div className={styles.crackLine} style={{ transform: 'rotate(20deg)' }} />
            <div className={styles.crackLine} style={{ transform: 'rotate(-15deg)', left: '40%' }} />
            <div className={styles.crackLine} style={{ transform: 'rotate(45deg)', left: '60%' }} />
          </div>
          <span className={styles.label} style={{ background: '#FF006E' }}>ANTES</span>
        </div>

        <div className={styles.divider}>
          <div className={styles.divLine} />
          <div className={styles.divCircle}>↔</div>
          <div className={styles.divLine} />
        </div>

        <div
          className={`${styles.side} ${styles.despues}`}
          style={{ background: `radial-gradient(circle at 60% 40%, ${caso.despuesColor}, #040D07)` }}
        >
          <div className={`${styles.phoneIcon} ${styles.phoneOk}`}>{caso.icono}</div>
          <div className={styles.checkBadge}>✅</div>
          <span className={styles.label} style={{ background: '#06D6A0' }}>DESPUÉS</span>
        </div>
      </div>

      <div className={styles.info}>
        <div>
          <h3 className={styles.titulo}>{caso.titulo}</h3>
          <p className={styles.modelo}>{caso.modelo}</p>
        </div>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Precio</span>
            <span className={styles.metaVal} style={{ color: '#4ADE80' }}>{caso.precio}</span>
          </div>
          <div className={styles.metaDiv} />
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Tiempo</span>
            <span className={styles.metaVal} style={{ color: '#A3E635' }}>{caso.tiempo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Galeria() {
  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nuestro trabajo
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Antes & <span className="gradient-text">Después</span>
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Resultados reales de reparaciones en Tijuana
        </motion.p>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {casos.map(c => <CasoCard key={c.id} caso={c} />)}
        </motion.div>
      </div>
    </section>
  );
}
