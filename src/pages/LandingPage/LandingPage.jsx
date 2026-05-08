import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button/index.js';
import { Card } from '../../components/ui/Card/index.js';
import { Badge } from '../../components/ui/Badge/index.js';
import styles from './LandingPage.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Fast & Lightweight',
    description: 'Built with performance in mind. Zero unnecessary dependencies.',
  },
  {
    icon: '🎨',
    title: 'Design Tokens',
    description: 'Consistent color, typography, and spacing via CSS custom properties.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'WCAG 2.1 compliant components with full keyboard navigation support.',
  },
  {
    icon: '🧩',
    title: 'Composable',
    description: 'Small, focused components that compose into complex UIs.',
  },
  {
    icon: '🌙',
    title: 'Dark Mode Ready',
    description: 'CSS variable architecture makes theming straightforward.',
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Mobile-first design that adapts to any screen size.',
  },
];

export function LandingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Badge variant="primary">v1.0.0 — Now available</Badge>
          <h1 className={styles.heroTitle}>
            Build beautiful UIs
            <br />
            <span className={styles.heroAccent}>faster than ever</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A modern React component library with design tokens, accessible components,
            and a clean developer experience.
          </p>
          <div className={styles.heroActions}>
            <Button size="lg" as={Link} to="/components">
              Browse Components
            </Button>
            <Button size="lg" variant="secondary" as={Link} to="/dashboard">
              View Dashboard
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <h2 className={styles.sectionTitle}>Everything you need</h2>
          <p className={styles.sectionSubtitle}>
            A complete toolkit for building production-ready interfaces.
          </p>
          <div className={styles.featureGrid}>
            {features.map(({ icon, title, description }) => (
              <Card key={title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{icon}</span>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDesc}>{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaSubtitle}>
            Explore the component library and start building today.
          </p>
          <Button size="lg" as={Link} to="/components">
            View Components
          </Button>
        </div>
      </section>
    </main>
  );
}
