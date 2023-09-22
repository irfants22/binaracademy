let carList = require("../resource/cars.json");
const crypto = require("crypto");

function handleHomePage(req, res) {
    res.status(200).send('{ message: “Ping successfully” }');
};

function handleCarsList(req, res) {
    res.status(200).json(carList);
};

function handleGetCars(req, res) {
    const id = req.params.id;
    const filter = carList.find((i) => i.id === id);
    res.status(200).json(filter);
};

function handleCreateCars(req, res) {
    const { image, rentPerDay, capacity, description, availableAt } = req.body;
    const newData = { id: crypto.randomUUID(), image, rentPerDay, capacity, description, availableAt };
    carList.push(newData);
    res.status(201).json(newData);
}

function handleUpdateCars(req, res) {
    const id = req.params.id
    const data = carList.find((i) => i.id === id)
    const payload = req.body;
    const updateData = { ...data, ...payload };

    const existingId = carList.findIndex((i) => i.id === id);

    carList[existingId] = updateData;
    res.status(201).json(updateData);
}

function handleDeleteCars(req, res) {
    const id = req.params.id;
    const del = carList.filter((i) => i.id !== id)
    carList = del;
    res.status(200).json("message: Deleted successfully");
};

function notFound(req, res) {
    res.status(404).send("Page Not Found");
};

module.exports = {
    handleHomePage,
    handleCarsList,
    handleGetCars,
    handleCreateCars,
    handleUpdateCars,
    handleDeleteCars,
    notFound
};