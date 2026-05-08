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

  return { progress, progressRef };
}

function useParticles(canvasRef, progressRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Dark particles for white bg, bright for dark bg
    const DARK  = ['#166534', '#15803d', '#14532d', '#1a3a1a', '#0f4f0f'];
    const BRIGHT = ['#4ADE80', '#A3E635', '#ffffff', '#86EFAC', '#22C55E'];

    const pts = Array.from({ length: 120 }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: Math.random() * (canvas.height || 800),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5,
      ci: Math.floor(Math.random() * 5),
    }));

    let raf;
    const draw = () => {
      const p = progressRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connection lines
      const lineColor = p < 0.5
        ? `rgba(22,101,52,${0.15 * (1 - p * 2) + 0.05})`
        : `rgba(74,222,128,${0.2 * ((p - 0.5) * 2)})`;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles - interpolate color set
      pts.forEach(pt => {
        pt.x += pt.vx;
        pt.y += pt.vy;
        if (pt.x < 0 || pt.x > canvas.width) pt.vx *= -1;
        if (pt.y < 0 || pt.y > canvas.height) pt.vy *= -1;

        const color = p < 0.5 ? DARK[pt.ci] : BRIGHT[pt.ci];
        const alpha = p < 0.5
          ? 0.5 + (1 - p * 2) * 0.4
          : 0.4 + ((p - 0.5) * 2) * 0.5;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef, progressRef]);
}

export function Hero() {
  const canvasRef = useRef(null);
  const { progress, progressRef } = useScrollTransition();
  useParticles(canvasRef, progressRef);

  // Interpolate background: white → dark green-black
  const r = Math.round(255 - 251 * progress);
  const g = Math.round(255 - 242 * progress);
  const b = Math.round(255 - 248 * progress);
  const bgColor = `rgb(${r},${g},${b})`;

  // Text color: dark → white
  const textBrightness = Math.round(255 * progress);
  const textColor = `rgb(${17 + (textBrightness - 17)},${17 + (textBrightness - 17)},${17 + (textBrightness - 17)})`;
  const isDark = progress > 0.45;

  return (
    <section className={styles.hero} style={{ backgroundColor: bgColor }}>
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Tech grid overlay — appears as it gets dark */}
      <div
        className={styles.techGrid}
        style={{ opacity: Math.max(0, (progress - 0.3) / 0.7) }}
      />

      {/* Green glow orbs — appear in dark mode */}
      <div className={styles.orb1} style={{ opacity: progress * 0.8 }} />
      <div className={styles.orb2} style={{ opacity: progress * 0.6 }} />

      <div className={styles.content}>
        {/* Logo */}
        <motion.div
          className={styles.logoWrap}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="/logo.png" alt="Fix Movil TJ" className={styles.logoImg} />
        </motion.div>

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
          Reparamos tu <span className={styles.gradText}>celular</span> hoy mismo
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
          <a
            href="https://wa.me/526641991538"
            className={styles.btnWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Cotiza por WhatsApp
          </a>
          <a
            href="#servicios"
            className={styles.btnOutline}
            style={{
              borderColor: isDark ? 'rgba(74,222,128,0.3)' : 'rgba(22,101,52,0.3)',
              color: isDark ? 'rgba(255,255,255,0.8)' : '#166534',
            }}
          >
            Ver servicios ↓
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            { val: '+2,000', label: 'celulares reparados' },
            { val: '1 hr', label: 'entrega express' },
            { val: '100%', label: 'garantía' },
          ].map((s, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className={styles.statDiv} style={{ background: isDark ? 'rgba(74,222,128,0.15)' : 'rgba(22,101,52,0.15)' }} />}
              <div key={s.val} className={styles.stat}>
                <strong>{s.val}</strong>
                <span style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>{s.label}</span>
              </div>
            </>
          ))}
        </motion.div>
      </div>

      <div className={styles.scrollHint} style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>
        <span>scroll</span>
        <div className={styles.scrollLine} style={{ background: `linear-gradient(to bottom, ${isDark ? 'rgba(74,222,128,0.5)' : 'rgba(22,101,52,0.4)'}, transparent)` }} />
      </div>
    </section>
  );
}
