import { prisma } from "../config/database.js";

const baseRepo = (model) => {
  const create = (data) => prisma[model].create({ data });

  const get = ({
    where = {},
    include = null,
    select = null,
    skip = 0,
    limit = 10,
    orderBy = "desc",
  } = {}) =>
    prisma[model].findMany({
      where,
      include,
      select,
      skip,
      take: limit,
      orderBy: { createdAt: orderBy },
    });

  const getById = (id, { include = null, select = null } = {}) =>
    prisma[model].findUnique({
      where: { id },
      include,
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
    updateById,
    deleteById,
  };
};

export default baseRepo;
