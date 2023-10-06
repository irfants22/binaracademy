const { Car } = require("../models");
const crypto = require("crypto");

function handleHomePage(req, res) {
  res.status(200).send("{ message: “Ping successfully” }");
}

const handleCarsList = async (req, res) => {
  try {
    const result = await Car.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const handleGetCars = async (req, res) => {
  try {
    const { id } = req.Cars;
    const result = await Car.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const handleCreateCars = async (req, res) => {
  try {
    const body = req.body;
    const result = await Car.create(body);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const handleUpdateCars = async (req, res) => {
  try {
    const { id } = req.Cars;
    const body = req.body;

    const [_, result] = await Car.update(body, {
      where: { id },
      returning: true,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const handleDeleteCars = async (req, res) => {
  try {
    const { id } = req.Cars;
    await Car.destroy({ where: { id } });
    res.status(201).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

function notFound(req, res) {
  res.status(404).send({ message: "Page Not Found" });
}

module.exports = {
  handleHomePage,
  handleCarsList,
  handleGetCars,
  handleCreateCars,
  handleUpdateCars,
  handleDeleteCars,
  notFound,
};
