import styles from './loading.module.css';

// loading page will work for all nested pages/layouts

export default function MealsLoading() {
  return <p className={styles.loading}>Fetching meals...</p>;
}
