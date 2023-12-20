const ToolModel = require("../models/ToolModel");

// Get All tools controller
exports.allTools = async (req, res) => {
  try {
    // Fetch all tools from the ToolModel
    const data = await ToolModel.find({});

    // Render the "index" view, passing the retrieved data to it
    res.render("index", { data: data });
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
  }
};

// Get All tools Manage controller
exports.toolManage = async (req, res) => {
  try {
    // Fetch all tools from the ToolModel
    const data = await ToolModel.find({});
    console.log(data);
    // Render the "toolManagement" view, passing the retrieved data to it
    res.render("toolManagement", { data: data });
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
  }
};

// Post a new tool controller
exports.postTool = async (req, res) => {
  try {
    // Create a new tool using data from the request body
    const data = await ToolModel.create(req.body);

    // Check if the tool was successfully created (has an _id property)
    if (data._id) {
      // Send a success response with a JSON indicating data is saved
      res.status(200).json({ status: "success", data: "Data saved" });
    } else {
      // Send a response indicating that data couldn't be saved
      res.status(200).json({ status: "fail", data: "Couldn't save data" });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
  }
};
