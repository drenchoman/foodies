import Link from 'next/link';
import styles from './meal-item.module.css';
import Image from 'next/image';
export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}) {
  // Use filll prop when you dont know the width and height of the image in advance
  // alternatively set width and height in advance
  return (
    <article className={styles.meal}>
      <header>
        <Image src={image} alt={title} fill />
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
