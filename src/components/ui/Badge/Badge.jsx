import styles from './Badge.module.css';

const variantClass = {
  default: styles.default,
  primary: styles.primary,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

export function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span className={[styles.badge, variantClass[variant], className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}
