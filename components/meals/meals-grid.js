import styles from './meals-grid.module.css';
import MealItem from './meal-item';
export default function MealsGrid({ meals }) {
  // ...meals shares all key value pairs
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
