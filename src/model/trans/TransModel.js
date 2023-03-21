import TransSchema from "./TransSchema.js";

export const addTransaction = (transObj) => {
  return TransSchema(transObj).save();
};

export const getTransactions = (filter) => {
  return TransSchema.find(filter);
};

export const editSingleTransaction = (_id, obj) => {
  return TransSchema.findByIdAndUpdate(_id, obj);
};

export const deleteTransactionById = (_id) => {
  return TransSchema.findByIdAndDelete(_id);
};
