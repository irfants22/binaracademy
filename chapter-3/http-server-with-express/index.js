const express = require("express");
const app = express();
const { setValidationById } = require("./validation/middleware.js");
const { handleHomePage, handleCarsList, handleGetCars, handleCreateCars, handleUpdateCars, handleDeleteCars, notFound }  = require("./validation/handler.js");

const PORT = 8000;

app.use(express.json());

// REST API ENDPOINTS
app.get("/", handleHomePage);
app.get("/cars", handleCarsList);
app.get("/cars/:id", setValidationById, handleGetCars);
app.post("/cars", handleCreateCars);
app.put("/cars/:id", setValidationById, handleUpdateCars);
app.delete("/cars/:id", setValidationById, handleDeleteCars);
app.get("*", notFound);

app.listen(PORT, () => {
    console.log(`Server sudah berjalan pada http://localhost:${PORT}`)
});