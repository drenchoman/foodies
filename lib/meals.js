// fetches data from db
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

// using all method to get all rows from table
// get method would bet used for one

// will now return a promise with async
export async function getMeals() {
  // simultating a promise
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// save a meal, instructions being saved as html so we need to santize the content saved by the user
export function saveMeal(meal) {
  // create a slug from the title
  meal.slug = slugify(meal.title, { lower: true });
  // sanitize the insructions
  meal.instructions = xss(meal.instructions);
}
