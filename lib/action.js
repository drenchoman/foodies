'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

// creates a server funcion, guaranteed to execute on the server
// will not run a client at all but should still sanitise information before saving
// only client side validation is happening (required)
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Invalid input');
    // response returned back to the page
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meal);
  // reavlidate cache that belongs to a certain route path
  // in code below, only /meals will be reavalidated
  revalidatePath('/meals');
  redirect('/meals');
  // return {
  //   message: 'Success!',
  // };
}
