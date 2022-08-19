const router = require("express").Router();

router.use("*", (req, res) => {
  res.json({ api: "up" });
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
