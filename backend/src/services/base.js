import { serverError, notFound } from "../error/error.js";
import baseRepo from "../repositories/base.js";

const baseService = (model) => {
  const repo = baseRepo(model);

  const create = async (data) => {
    const createData = await repo.create(data);

    if (!createData) {
      throw serverError("Something went wrong!");
    }
    return createData;
  };

  const get = async (where, select, skip, limit, order) => {
    const data = await repo.get(where, select, skip, limit, order);

    if (!data) {
      return [];
    }
    return data;
  };

  const getById = async (id, select) => {
    const singleData = await repo.getById(id, select);

    if (!singleData) {
      throw notFound(`ID-${id} not found!`);
    }
    return singleData;
  };

  const getByKey = async (key, value, select) => {
    const keyData = await repo.getByKey(key, value, select);

    if (!keyData) {
      throw notFound(`Not found!`);
    }
    return keyData;
  };

  const updateById = async (id, data) => {
    const updateData = await repo.updateById(id, data);

    if (!updateData) {
      throw notFound(`ID-${id} not found!`);
    }
    return updateData;
  };

  const deleteById = async (id) => {
    const deleteData = await repo.deleteById(id);

    if (!deleteData) {
      throw notFound(`ID-${id} not found!`);
    }
    return {
      status: "Success",
      message: `ID-${id} deleted successfully`,
    };
  };

  return {
    create,
    get,
    getById,
    getByKey,
    updateById,
    deleteById,
  };
};

export default baseService;
