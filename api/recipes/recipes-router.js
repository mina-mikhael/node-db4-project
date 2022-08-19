const router = require("express").Router();
const { getRecipeById } = require("./recipes-model");

router.get("/:recipe_id", (req, res, next) => {
  getRecipeById(req.params.recipe_id)
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

//eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: "server error try again never",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
