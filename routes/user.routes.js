const express = require("express");
const { handleGetAllUsers, handlegetUserById, handleUpdteUserbyID, handleDeleteUserbyID, handleCreateUserbyID } = require("../controllers/user.controllers");

const routes = express.Router();

routes.get("/", handleGetAllUsers)
routes.post("/", handleCreateUserbyID);

// routes.route("/")
// .get(handleGetAllUsers)
// .post(handleCreateUserbyID)

routes.get("/:id", handlegetUserById)

routes.post("/:id", handleUpdteUserbyID)

routes.delete("/:id", handleDeleteUserbyID)



module.exports = routes;