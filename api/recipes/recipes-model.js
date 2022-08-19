function getRecipeById(recipe_id) {
  return Promise.resolve(`some recipe with id: ${recipe_id}`);
}

module.exports = { getRecipeById };
