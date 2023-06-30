const express = require('express')
const router = express.Router()
const {handleGetAllUsers,handleGetUserById,handleUpdateUser,handleAddNewUser,handleDeleteUser} = require('../controllers/userController')

//Routes
router.get("/all-users", handleGetAllUsers);

router.post("/register",handleAddNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUser)
  .delete(handleDeleteUser);

module.exports = router