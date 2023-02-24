const express = require("express");
const morgan = require("morgan");
const appRouter = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/contacts", appRouter);

app.get("/", (req, res, next) => {
  res.status(304).redirect("/contacts");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.info(`Server listening on http://localhost:${PORT}`);
});
