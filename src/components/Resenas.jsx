import { motion } from 'framer-motion';
import styles from './Resenas.module.css';

const resenas = [
  { nombre: 'María G.', inicial: 'M', color: '#4ADE80', estrellas: 5, texto: 'Repararon la pantalla de mi iPhone en menos de una hora. Quedó perfecta y el precio fue muy justo. ¡100% recomendados!', tiempo: 'hace 2 días', servicio: 'Pantalla iPhone 12' },
  { nombre: 'Carlos M.', inicial: 'C', color: '#22C55E', estrellas: 5, texto: 'El mejor servicio de reparación en toda Tijuana. Muy profesionales y rápidos. Mi Samsung volvió a la vida.', tiempo: 'hace 5 días', servicio: 'Batería Samsung S21' },
  { nombre: 'Ana L.', inicial: 'A', color: '#A3E635', estrellas: 5, texto: 'Excelente trabajo. Llevé mi Xiaomi con el puerto de carga dañado y en 40 minutos ya estaba listo. Garantía incluida!', tiempo: 'hace 1 semana', servicio: 'Puerto de carga Xiaomi' },
  { nombre: 'Roberto P.', inicial: 'R', color: '#16A34A', estrellas: 5, texto: 'Se me cayó el cel al agua y pensé que ya se había perdido. Lo llevé a FixMovil y lo recuperaron. Increíble trabajo.', tiempo: 'hace 2 semanas', servicio: 'Daño por agua' },
  { nombre: 'Daniela F.', inicial: 'D', color: '#34D399', estrellas: 5, texto: 'La cámara de mi iPhone no enfocaba bien. Me la repararon en el día y ahora toma fotos perfectas. Muy buena atención.', tiempo: 'hace 1 mes', servicio: 'Cámara iPhone 11' },
  { nombre: 'Miguel R.', inicial: 'M', color: '#6EE7B7', estrellas: 5, texto: 'Fui con el sonido dañado de mi celular. Lo dejaron como nuevo. Precio razonable y atención de primera. Ya soy cliente fijo.', tiempo: 'hace 1 mes', servicio: 'Bocina Motorola' },
];

function Stars({ n }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  );
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function Resenas() {
  return (
    <section id="resenas" className={styles.section}>
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Lo que dicen nuestros clientes
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Más de <span className="gradient-text">2,000 clientes</span><br />satisfechos en TJ
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Calificación promedio ★ 4.9 / 5
        </motion.p>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {resenas.map(r => (
            <motion.div key={r.nombre + r.servicio} className={styles.card} variants={card}>
              <div className={styles.header}>
                <div className={styles.avatar} style={{ background: r.color }}>
                  {r.inicial}
                </div>
                <div className={styles.meta}>
                  <span className={styles.nombre}>{r.nombre}</span>
                  <span className={styles.tiempo}>{r.tiempo}</span>
                </div>
              </div>
              <Stars n={r.estrellas} />
              <p className={styles.texto}>"{r.texto}"</p>
              <div className={styles.servicio}>🔧 {r.servicio}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
