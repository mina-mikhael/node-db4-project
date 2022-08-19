const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  const rawRes = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("step_ingredients as si", "si.step_id", "s.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "r.created_at",
      "s.step_id",
      "s.step_number",
      "s.step_text",
      "i.ingredient_id",
      "i.ingredient_name",
      "si.quantity",
      "i.ingredient_unit"
    )
    .orderBy("s.step_number")
    .where("r.recipe_id", recipe_id);

  const modRes = {
    recipe_id: rawRes[0].recipe_id,
    recipe_name: rawRes[0].recipe_name,
    created_at: rawRes[0].created_at,
    steps: rawRes.reduce((acc, step) => {
      //step without ingredients
      if (!step.ingredient_id) {
        return acc.concat({
          step_number: step.step_number,
          step_id: step.step_id,
          instructions: step.step_text,
        });
      }
      // step with single ingredient
      if (step.ingredient_id && !acc.find((el) => el.step_id === step.step_id)) {
        return acc.concat({
          step_number: step.step_number,
          step_id: step.step_id,
          instructions: step.step_text,
          ingredients: [
            {
              ingredient_id: step.ingredient_id,
              ingredient_name: step.ingredient_name,
              quantity: step.quantity,
              unit: step.ingredient_unit,
            },
          ],
        });
      }
      //step repeated because of multiple ingredients
      const currentStep = acc.find((current) => current.step_id === step.step_id);
      currentStep.ingredients.push({
        ingredient_id: step.ingredient_id,
        ingredient_name: step.ingredient_name,
        quantity: step.quantity,
        unit: step.ingredient_unit,
      });
      return acc;
    }, []),
  };
  return modRes;
}

module.exports = { getRecipeById };
