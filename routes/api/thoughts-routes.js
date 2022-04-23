const router = require("express").Router();
const {
  addThought,
  removeThought,
} = require("../../controllers/thoughts-controller");

// /api/thoughts
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").delete(removeThought);

module.exports = router;
