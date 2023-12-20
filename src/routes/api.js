const express = require("express");
const {
  allTools,
  postTool,
  toolManage,
} = require("../controllers/toolsController");

const router = express.Router();

router.get("/", allTools);
router.get("/tools-management", toolManage);
router.post("/post-tool", postTool);

module.exports = router;
