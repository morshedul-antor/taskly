export const successHandler = (req, res, next) => {
  res.success = (data = null) => {
    res.status(200).json(data);
  };

  res.created = (data = null) => {
    res.status(201).json(data);
  };

  res.accepted = (data = null) => {
    res.status(202).json(data);
  };

  next();
};
