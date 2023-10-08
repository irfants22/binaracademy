const { Car } = require("../models");

const setValidationById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Cars = await Car.findByPk(id);

    if (!Cars) {
      res.status(404).json({ error: "ID not found!" });
      return;
    }

    req.Cars = Cars;
    next();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  setValidationById,
};
