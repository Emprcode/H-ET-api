import { getSingleUser } from "../model/user/UserModel.js";

export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const user = await getSingleUser({ _id: authorization });

    if (user?._id) {
      return next();
    }
  } catch (error) {
    next(error);
  }
};
