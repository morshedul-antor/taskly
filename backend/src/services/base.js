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

  const get = async (where, include, skip, limit, orderBy) => {
    const data = await repo.get(where, include, skip, limit, orderBy);

    if (!data) {
      return [];
    }
    return data;
  };

  const getById = async (id, include) => {
    const singleData = await repo.getById(id, include);

    if (!singleData) {
      throw notFound(`${id} not found!`);
    }
    return singleData;
  };

  const updateById = async (id, data) => {
    const updateData = await repo.updateById(id, data);

    if (!updateData) {
      throw notFound(`${id} not found!`);
    }
    return updateData;
  };

  const deleteById = async (id) => {
    const deleteData = await repo.deleteById(id);

    if (!deleteData) {
      throw notFound(`${id} not found!`);
    }
    return {
      status: "Success",
      message: `${id} deleted successfully`,
      statusCode: 202,
    };
  };

  return {
    create,
    get,
    getById,
    updateById,
    deleteById,
  };
};

export default baseService;
