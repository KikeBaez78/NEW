import styles from './Avatar.module.css';

const sizeClass = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
};

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function Avatar({ src, alt, name, size = 'md', className = '' }) {
  return (
    <div
      className={[styles.avatar, sizeClass[size], className].filter(Boolean).join(' ')}
      role="img"
      aria-label={alt || name}
    >
      {src ? (
        <img src={src} alt={alt || name} className={styles.image} />
      ) : name ? (
        <span className={styles.initials}>{getInitials(name)}</span>
      ) : (
        <svg className={styles.placeholder} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
    </div>
  );
}
