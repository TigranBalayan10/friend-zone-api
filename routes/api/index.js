const router = require("express").Router();
const commentRoutes = require("./thoughts-routes");
const pizzaRoutes = require("./user-routes");

router.use("/thoughts", commentRoutes);
router.use("/users", pizzaRoutes);

module.exports = router;
