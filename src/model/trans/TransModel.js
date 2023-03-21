import TransSchema from "./TransSchema.js";

export const addTransaction = (transObj) => {
  return TransSchema(transObj).save();
};

export const getTransaction = (filter) => {
  return TransSchema.find(filter);
};

export const editTransaction = (_id, obj) => {
  return TransSchema.findByIdAndUpdate(_id, obj);
};

export const deleteTransaction = (_id) => {
  return TransSchema.findByIdAndDelete(_id);
};
