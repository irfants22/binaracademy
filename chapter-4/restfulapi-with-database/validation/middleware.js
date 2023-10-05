let carList = require("../resource/cars.json");

function setValidationById(req, res, next) {
    const id = req.params.id;
    const book = carList.find((i) => i.id === id);

    if (!book) {
        res.status(404).json({
            error: "The ID you are looking for was not found!",
        });

        return;
    }

    req.carList = carList;
    next();
}

module.exports = {
    setValidationById,
};
