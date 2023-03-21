import express from "express";
import {
  addTransaction,
  deleteTransactionById,
  editSingleTransaction,
  getTransactions,
} from "../model/trans/TransModel.js";

const router = express.Router();

//add transaction
router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await addTransaction({
      ...req.body,
      userId: authorization,
    });

    result?._id
      ? res.json({
          status: "success",
          message: "Transaction added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add transaction, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//get transaction
router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await getTransactions({ userId: authorization });

    res.json({
      status: "success",
      message: "Transaction added successfully",
      result,
    });
  } catch (error) {
    next(error);
  }
});

//edit
router.put("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await editSingleTransaction(
      { userId: authorization },
      req.body
    );

    result?._id
      ? res.json({
          status: "success",
          message: "Transaction edited successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to edit the transaction",
        });
  } catch (error) {
    next(error);
  }
});
router.delete("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await deleteTransactionById({ userId: authorization });
    result?._id
      ? res.json({
          status: "success",
          message: "Transaction deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete transaction",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
