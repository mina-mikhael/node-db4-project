const recipes = [
  { recipe_name: "Broccoli Pesto Pasta", created_at: "08/19/2022 at 09:17 am" },
  { recipe_name: "Lemon Chicken", created_at: "07/09/2022 at 02:47 pm" },
  { recipe_name: "Salmon en Papillote", created_at: "01/23/2021 at 08:37 am" },
];

const ingredients = [
  { ingredient_name: "Broccoli", ingredient_unit: "lbs" },
  { ingredient_name: "pesto", ingredient_unit: "lbs" },
  { ingredient_name: "pasta", ingredient_unit: "lbs" },
  { ingredient_name: "Lemon", ingredient_unit: "slices" },
  { ingredient_name: "Chicken", ingredient_unit: "kilos" },
  { ingredient_name: "Salmon", ingredient_unit: "grams" },
];

const step_ingredients = [
  //   Broccoli Pesto Pasta
  { step_id: 2, ingredient_id: 1, quantity: 1 },
  { step_id: 3, ingredient_id: 2, quantity: 1.5 },
  { step_id: 3, ingredient_id: 3, quantity: 2 },
  //   Lemon Chicken
  { step_id: 5, ingredient_id: 4, quantity: 1 },
  { step_id: 5, ingredient_id: 5, quantity: 0.41 },
  //   Salmon en Papillote
  { step_id: 7, ingredient_id: 1, quantity: 1 },
];

const steps = [
  //   Broccoli Pesto Pasta
  { step_text: "Heat Pan", step_number: 1, recipe_id: 1 },
  { step_text: "Add Broccoli", step_number: 2, recipe_id: 1 },
  { step_text: "Add Pesto mixed with Pasta", step_number: 3, recipe_id: 1 },
  //   Lemon Chicken ,recipe_id: 2
  { step_text: "Heat oven", step_number: 1, recipe_id: 2 },
  { step_text: "Put Chicken and lemon in oven", step_number: 2, recipe_id: 2 },
  { step_text: "cook in oven at 500 degrees", step_number: 3, recipe_id: 2 },
  //   Salmon en Papillote
  { step_text: "Fish a Salmon in the Bidasoa river", step_number: 1, recipe_id: 3 },
  { step_text: "Cook Salmon", step_number: 2, recipe_id: 3 },
];

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("step_ingredients").insert(step_ingredients);
};
