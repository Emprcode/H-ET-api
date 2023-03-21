import express from "express";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    //         const {authorization} = req.headers
    // const result = await
  } catch (error) {
    next(error);
  }
});

export default router;
