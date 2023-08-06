// =========== Необхідно доробити ==============
// 1. Не вірно працює express - async - handler коли вводимо Id
// з меньшою кількістю знаків ніж в правильному Id. Видає помилку 200 замість
// тієї, яку ми прокидуємо. В deleteContact, getContactById, updateContact, updateFavorite
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const { errorHandler, notFoundError } = require("./middlewares/index");

require("./db");

const app = express();

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/contacts", contactsRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message, stack: err.stack });
// });
app.use("*", notFoundError);

app.use(errorHandler);

module.exports = app;
