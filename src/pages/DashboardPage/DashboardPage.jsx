import { Card, CardHeader, CardBody } from '../../components/ui/Card/index.js';
import { Badge } from '../../components/ui/Badge/index.js';
import { Avatar } from '../../components/ui/Avatar/index.js';
import { Button } from '../../components/ui/Button/index.js';
import styles from './DashboardPage.module.css';

const stats = [
  { label: 'Total Users', value: '12,489', change: '+12%', positive: true },
  { label: 'Revenue', value: '$48,230', change: '+8.1%', positive: true },
  { label: 'Active Sessions', value: '1,024', change: '-2.4%', positive: false },
  { label: 'Conversion', value: '3.6%', change: '+0.4%', positive: true },
];

const activity = [
  { name: 'Alice Johnson', action: 'Signed up', time: '2m ago', badge: 'success' },
  { name: 'Bob Martinez', action: 'Upgraded plan', time: '15m ago', badge: 'primary' },
  { name: 'Carol White', action: 'Cancelled subscription', time: '1h ago', badge: 'error' },
  { name: 'David Kim', action: 'Signed up', time: '2h ago', badge: 'success' },
  { name: 'Eva Brown', action: 'Submitted feedback', time: '3h ago', badge: 'default' },
];

export function DashboardPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.subtitle}>Welcome back — here's what's happening.</p>
          </div>
          <Button>Export Report</Button>
        </div>

        <div className={styles.statsGrid}>
          {stats.map(({ label, value, change, positive }) => (
            <Card key={label} shadow="md">
              <CardBody>
                <p className={styles.statLabel}>{label}</p>
                <p className={styles.statValue}>{value}</p>
                <span className={[styles.statChange, positive ? styles.positive : styles.negative].join(' ')}>
                  {change} vs last month
                </span>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className={styles.bottom}>
          <Card shadow="md" className={styles.activityCard}>
            <CardHeader>
              <h2 className={styles.cardTitle}>Recent Activity</h2>
            </CardHeader>
            <CardBody>
              <ul className={styles.activityList}>
                {activity.map(({ name, action, time, badge }) => (
                  <li key={name + time} className={styles.activityItem}>
                    <Avatar name={name} size="sm" />
                    <div className={styles.activityInfo}>
                      <span className={styles.activityName}>{name}</span>
                      <span className={styles.activityAction}>{action}</span>
                    </div>
                    <div className={styles.activityMeta}>
                      <Badge variant={badge}>{action}</Badge>
                      <span className={styles.activityTime}>{time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>

          <Card shadow="md" className={styles.quickCard}>
            <CardHeader>
              <h2 className={styles.cardTitle}>Quick Actions</h2>
            </CardHeader>
            <CardBody>
              <div className={styles.quickActions}>
                <Button variant="secondary" fullWidth>Invite User</Button>
                <Button variant="secondary" fullWidth>Create Report</Button>
                <Button variant="secondary" fullWidth>Manage Settings</Button>
                <Button variant="ghost" fullWidth>View Docs</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
