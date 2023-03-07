import express from "express";
import { createTransaction, getTransById } from "../model/trans/TransModel.js";

const router = express.Router();

// add

router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await createTransaction({
      ...req.body,
      userId: authorization,
    });

    result?._id
      ? res.json({
          status: "success",
          message: "New transaction successfully added",
        })
      : res.json({
          status: "error",
          message: "Unable to add transaction, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//get
router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const result = await getTransById({ userId: authorization });
    console.log(result);
    res.json({
      status: "success",
      message: "Transaction fetched",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
