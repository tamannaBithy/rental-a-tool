const express = require("express");
const { allTools, postTool } = require("../controllers/toolsController");

const router = express.Router();

router.get("/", allTools);
router.get("/tools-management", (req, res) => {
  res.render("toolManagement");
});
router.post("/post-tool", postTool);

module.exports = router;
