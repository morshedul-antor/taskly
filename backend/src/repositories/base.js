import { prisma } from "../config/database.js";

const baseRepo = (model) => {
  const create = (data) => prisma[model].create({ data });

  const get = ({
    where = {},
    select = null,
    skip = 0,
    limit = undefined,
    order = "desc",
  } = {}) =>
    prisma[model].findMany({
      where,
      select,
      skip,
      take: limit,
      orderBy: { createdAt: order },
    });

  const getById = (id, { select = null } = {}) =>
    prisma[model].findUnique({
      where: { id },
      select,
    });

  const getByKey = (key, value, { select = null } = {}) =>
    prisma[model].findUnique({
      where: { [key]: value },
      select,
    });

  const updateById = (id, data) =>
    prisma[model].update({
      where: { id },
      data,
    });

  const deleteById = (id) =>
    prisma[model].delete({
      where: { id },
    });

  return {
    create,
    get,
    getById,
    getByKey,
    updateById,
    deleteById,
  };
};

export default baseRepo;
