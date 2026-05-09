import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function useScrollTransition() {
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const p = Math.min(window.scrollY / (window.innerHeight * 0.85), 1);
          progressRef.current = p;
          setProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { progress };
}

function Phone({ children }) {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneDynamicIsland} />
      <div className={styles.phoneScreen}>{children}</div>
      <div className={styles.phoneBtnL} />
      <div className={styles.phoneBtnR} />
    </div>
  );
}

export function Hero() {
  const { progress } = useScrollTransition();
  const isDark = progress > 0.45;

  return (
    <section className={styles.hero}>
      <div className={styles.techGrid} style={{ opacity: Math.max(0, (progress - 0.3) / 0.7) }} />
      <div className={styles.orb1} style={{ opacity: progress * 0.8 }} />
      <div className={styles.orb2} style={{ opacity: progress * 0.6 }} />

      <div className={styles.content}>

        {/* ── Left: text ── */}
        <div className={styles.textCol}>
          <motion.span
            className={styles.badge}
            style={{
              background: isDark ? 'rgba(74,222,128,0.1)' : 'rgba(22,101,52,0.08)',
              borderColor: isDark ? 'rgba(74,222,128,0.3)' : 'rgba(22,101,52,0.25)',
              color: isDark ? '#4ADE80' : '#15803d',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            📍 Tijuana, BC · Desde 2017 · Servicio Express
          </motion.span>

          <motion.h1
            className={styles.title}
            style={{ color: isDark ? '#ffffff' : '#111111' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Reparamos tu <span className={styles.gradText}>celular</span><br />hoy mismo
          </motion.h1>

          <motion.p
            className={styles.sub}
            style={{ color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Pantallas, baterías, puertos de carga y más.<br />
            Todos los modelos · Garantía incluida · Precio justo.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="https://wa.me/526641991538" className={styles.btnWhatsapp} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Cotiza por WhatsApp
            </a>
            <a
              href="#servicios"
              className={styles.btnOutline}
              style={{ borderColor: isDark ? 'rgba(74,222,128,0.3)' : 'rgba(22,101,52,0.3)', color: isDark ? 'rgba(255,255,255,0.8)' : '#166534' }}
            >
              Ver servicios ↓
            </a>
          </motion.div>

          <motion.div className={styles.stats} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
            <div className={styles.stat}>
              <strong>+2,000</strong>
              <span style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>celulares reparados</span>
            </div>
            <div className={styles.statDiv} style={{ background: isDark ? 'rgba(74,222,128,0.15)' : 'rgba(22,101,52,0.2)' }} />
            <div className={styles.stat}>
              <strong>1 hr</strong>
              <span style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>entrega express</span>
            </div>
            <div className={styles.statDiv} style={{ background: isDark ? 'rgba(74,222,128,0.15)' : 'rgba(22,101,52,0.2)' }} />
            <div className={styles.stat}>
              <strong>100%</strong>
              <span style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>garantía</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: two phones ── */}
        <motion.div
          className={styles.phonesCol}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          {/* Back phone — logo */}
          <div className={`${styles.phoneWrap} ${styles.phoneBack}`}>
            <Phone>
              <div className={styles.logoScreen}>
                <img src="/logo.png" alt="Fix Movil TJ" className={styles.logoScreenImg} />
                <p className={styles.logoScreenName}>Fix Movil TJ</p>
                <span className={styles.logoScreenSince}>Desde 2017 · Tijuana</span>
              </div>
            </Phone>
          </div>

          {/* Front phone — animated service screen */}
          <div className={`${styles.phoneWrap} ${styles.phoneFront}`}>
            <Phone>
              <div className={styles.appScreen}>
                <div className={styles.appHeader}>
                  <span className={styles.appDot} style={{ background: '#4ADE80' }} />
                  <span className={styles.appTitle}>Fix Movil TJ</span>
                  <span className={styles.appDot} style={{ background: '#4ADE80', opacity: 0.4 }} />
                </div>
                <div className={styles.appBody}>
                  <div className={styles.appStat}>
                    <div className={styles.appRing}>
                      <svg viewBox="0 0 80 80" className={styles.appRingSvg}>
                        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(74,222,128,0.1)" strokeWidth="6" />
                        <circle cx="40" cy="40" r="34" fill="none" stroke="url(#g)" strokeWidth="6"
                          strokeDasharray="213" strokeDashoffset="30" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4ADE80" />
                            <stop offset="100%" stopColor="#A3E635" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className={styles.appRingInner}>
                        <strong>98%</strong>
                        <span>éxito</span>
                      </div>
                    </div>
                  </div>
                  {[
                    { icon: '📱', label: 'Pantalla', price: '$700', color: '#4ADE80' },
                    { icon: '🔋', label: 'Batería',  price: '$350', color: '#A3E635' },
                    { icon: '⚡', label: 'Carga',    price: '$400', color: '#22C55E' },
                  ].map((s, i) => (
                    <div key={s.label} className={styles.appRow} style={{ animationDelay: `${i * 0.15}s` }}>
                      <span className={styles.appRowIcon}>{s.icon}</span>
                      <span className={styles.appRowLabel}>{s.label}</span>
                      <span className={styles.appRowPrice} style={{ color: s.color }}>{s.price}</span>
                    </div>
                  ))}
                  <div className={styles.appWaBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#040D07"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Cotizar ahora
                  </div>
                </div>
              </div>
            </Phone>
          </div>
        </motion.div>

      </div>

      <div className={styles.scrollHint} style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>
        <span>scroll</span>
        <div className={styles.scrollLine} style={{ background: `linear-gradient(to bottom, ${isDark ? 'rgba(74,222,128,0.5)' : 'rgba(22,101,52,0.4)'}, transparent)` }} />
      </div>
    </section>
  );
}
