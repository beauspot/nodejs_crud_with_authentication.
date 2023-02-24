const express = require("express");
const morgan = require("morgan");
const appRouter = require("./routes/contactRoutes");
const _404Error = require("./controllers/_404");
const ConnectDB = require("./db/connect");
const helmet = require("helmet");
const mongo_sanitize = require("express-mongo-sanitize");
const cors = require("cors");
const xss = require("xss-clean");
require("dotenv").config();

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(mongo_sanitize());
app.use(cors());
app.use(xss());

app.use("/contacts", appRouter);

app.get("/", (req, res, next) => {
  res.status(304).redirect("/contacts");
});

app.use("*", _404Error.err404);

const PORT = process.env.PORT || 5050;

const StartServer = async () => {
  try {
    await ConnectDB.connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.info(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error({ error: error.message });
  }
};

StartServer();
