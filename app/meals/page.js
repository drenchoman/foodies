import Link from 'next/link';
import MealsGrid from '../../components/meals/meals-grid';
import styles from './page.module.css';
import { getMeals } from '../../lib/meals';

// async can be used on server components
export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created {''}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite receipe and cook it yourself. It is
          easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
