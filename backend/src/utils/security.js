import bcrypt from "bcrypt";

export const createHash = async (data) => {
  return await bcrypt.hash(data, 10);
};

export const validateHash = async (plainData, hashData) => {
  return await bcrypt.compare(plainData, hashData);
};
