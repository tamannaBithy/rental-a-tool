const ToolModel = require("../models/ToolModel");

exports.allTools = async (req, res) => {
  try {
    const data = await ToolModel.find({});

    res.render("index", { data: data });
  } catch (error) {
    console.log(error);
  }
};

exports.postTool = async (req, res) => {
  try {
    const data = await ToolModel.create(req.body);

    if (data._id) {
      res.status(200).json({ status: "success", data: "Data saved" });
    } else {
      res.status(200).json({ status: "fail", data: "Couldn't saved data" });
    }
  } catch (error) {
    console.log(error);
  }
};
