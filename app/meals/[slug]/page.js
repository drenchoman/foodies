import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
export default function MealsDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  // if meal is not found it will not show the component
  // will go to the closest error or not found page
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by{' '}
            <a href={`mailto:${meal.creator_email}`}>
              {meal.creator}
            </a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={styles.main}>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
