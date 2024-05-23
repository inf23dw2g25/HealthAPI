//Modulos
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const swaggerUI = require("swagger-ui-express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Controllers
const middleware = require("./controllers/middlewareController");
const protectedController = require("./controllers/protectedController");
const swaggerSpec = require("./controllers/swaggerSpecsController");
require("./controllers/environmentController");
require("./Strategies/googleStrategy");

//Rotas
const authRoute = require("./routes/authRoute");
const consultaRoutes = require("./routes/consultaRoute");
const especialistaRoutes = require("./routes/especialistaRoute");
const especialidadeRoutes = require("./routes/especialidadeRoute");
const historicoRoutes = require("./routes/historicoRoute");
const pacienteRoutes = require("./routes/pacienteRoute");
const perfilRoutes = require("./routes/perfilRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

//ROUTES
app.use(
  "/",
  authRoute,
  consultaRoutes,
  especialidadeRoutes,
  especialistaRoutes,
  historicoRoutes,
  pacienteRoutes,
  perfilRoutes
);

//ROUTES DO ROOT
app.use(
  "/protected",
  middleware.isLoggedIn,
  protectedController.getProtectedResource
);

app.listen(process.env.NODE_PORT, () =>
  console.log("listening on: " + process.env.NODE_PORT)
);
