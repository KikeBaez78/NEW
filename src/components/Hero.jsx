import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function useParticles(ref) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COLORS = ['#FF006E', '#8338EC', '#3A86FF', '#ffffff', '#FFBE0B'];
    const pts = Array.from({ length: 110 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(131,56,236,${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [ref]);
}

function PhoneMock() {
  return (
    <div className={styles.phone}>
      <div className={styles.notch} />
      <div className={styles.screen}>
        <div className={styles.screenHeader}>
          <span className={styles.appIcon}>🔧</span>
          <span className={styles.appName}>FixMovil TJ</span>
        </div>
        <div className={styles.screenCard}>
          <p className={styles.screenLabel}>Estado</p>
          <p className={styles.screenStatus}>✅ Reparado</p>
        </div>
        <div className={styles.screenRow}><div className={styles.bar} style={{ width: '90%' }} /></div>
        <div className={styles.screenRow}><div className={styles.bar} style={{ width: '65%' }} /></div>
        <div className={styles.screenRow}><div className={styles.bar} style={{ width: '80%' }} /></div>
        <div className={styles.screenBtn}>Ver detalles →</div>
      </div>
      <div className={styles.homeBtn} />
    </div>
  );
}

export function Hero() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={styles.content}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <span className={styles.badge}>📍 Tijuana, BC · Servicio Express</span>
          <h1 className={styles.title}>
            Reparamos<br />
            <span className={styles.gradText}>tu celular</span><br />
            hoy mismo
          </h1>
          <p className={styles.sub}>
            Pantallas, baterías, puertos de carga y más.<br />
            Todos los modelos · Garantía incluida · Precio justo.
          </p>
          <div className={styles.ctas}>
            <a
              href="https://wa.me/526641234567"
              className={styles.btnWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Cotiza por WhatsApp
            </a>
            <a href="#servicios" className={styles.btnOutline}>
              Ver servicios ↓
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><strong>+2,000</strong><span>celulares reparados</span></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><strong>1 hr</strong><span>entrega express</span></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><strong>100%</strong><span>garantía</span></div>
          </div>
        </motion.div>

        <motion.div
          className={styles.phoneSide}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <PhoneMock />
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
