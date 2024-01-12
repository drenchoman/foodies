// fetches data from db
import sql from 'better-sqlite3';

const db = sql('meals.db');

// using all method to get all rows from table
// get method would bet used for one

// will now return a promise with async
export async function getMeals() {
  // simultating a promise
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare('SELECT * FROM meals').all();
}
