import { motion } from 'framer-motion';
import styles from './Contacto.module.css';

const info = [
  { icon: '📍', label: 'Dirección', value: 'Tijuana, Baja California, México', sub: 'Pregunta por la ubicación exacta por WhatsApp' },
  { icon: '🕐', label: 'Horario', value: 'Lun – Sáb: 9:00am – 7:00pm', sub: 'Domingos: 10:00am – 3:00pm' },
  { icon: '⚡', label: 'Servicio Express', value: 'Entrega el mismo día', sub: 'La mayoría de reparaciones en 1 hora' },
];

export function Contacto() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.orb} />
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contáctanos
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ¿Listo para reparar<br />
          <span className="gradient-text">tu celular?</span>
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Escríbenos ahora — respondemos en minutos
        </motion.p>

        <div className={styles.layout}>
          {/* WhatsApp CTA */}
          <motion.div
            className={styles.waCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.waIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <h3 className={styles.waTitle}>WhatsApp</h3>
            <p className={styles.waSub}>La forma más rápida de cotizar y agendar tu reparación.</p>
            <a
              href="https://wa.me/526641234567?text=Hola! Necesito reparar mi celular."
              className={styles.waBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir ahora →
            </a>
            <p className={styles.waHint}>Respuesta en menos de 5 minutos</p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {info.map(item => (
              <div key={item.label} className={styles.infoCard}>
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <p className={styles.infoLabel}>{item.label}</p>
                  <p className={styles.infoVal}>{item.value}</p>
                  <p className={styles.infoSub}>{item.sub}</p>
                </div>
              </div>
            ))}

            <div className={styles.brands}>
              <p className={styles.brandsLabel}>Reparamos todas las marcas:</p>
              <div className={styles.brandsRow}>
                {['Apple', 'Samsung', 'Xiaomi', 'Motorola', 'Huawei', 'LG'].map(b => (
                  <span key={b} className={styles.brand}>{b}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
