import express from "express";
import { createUser, getSingleUser } from "../model/user/UserModel.js";

const router = express.Router();

// register

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await createUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Registration Successful",
        })
      : res.json({
          status: "error",
          message: "Unable to register user, Please try again later",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      (error.errorCode = 200),
        (error.message =
          "This email is already used, Please try with different email or reset with password");
    }
    next(error);
  }
});

//login
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await getSingleUser(req.body);
console.log(result)
    result?._id
      ? res.json({
          status: "success",
          message: "Login Successful",
          result:{
            _id: result._id,
            name:result.name,
            email:result.email
          }
        })
      : res.json({
          status: "error",
          message: "Unable to login, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
