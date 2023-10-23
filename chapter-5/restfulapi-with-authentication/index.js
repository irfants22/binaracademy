const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/openapicar.json");
const {
  home,
  getList,
  getDetail,
  create,
  update,
  destroy,
  notFound,
  setValidationById,
} = require("./app/controllers/car.js");
const { register, registerAdmin, login, currentUser } = require("./app/controllers/user.js");
const { authorize, isSuperAdmin, isSuperAdminOrAdmin } = require("./app/middlewares/auth.js")

const PORT = 8000;

app.use(express.json());

// DOCUMENTATION API
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// HOME
app.get("/", home);

// AUTHENTICATION
app.post("/auth/register", register);
app.post("/auth/register/admin", authorize, isSuperAdmin, registerAdmin);
app.post("/auth/login", login);

// USER
app.get("/users/me", authorize, currentUser);

// REST API ENDPOINTS
app.get("/cars", authorize, getList);
app.get("/cars/:id", authorize, setValidationById, getDetail);
app.post("/cars", authorize, isSuperAdminOrAdmin, create);
app.put("/cars/:id", authorize, isSuperAdminOrAdmin, setValidationById, update);
app.delete("/cars/:id", authorize, isSuperAdminOrAdmin, setValidationById, destroy)

// WRONG END POINT
app.get("*", notFound);

app.listen(PORT, () => {
  console.log(`Server sudah berjalan pada http://127.0.0.1:${PORT}`);
});
