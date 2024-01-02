const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const Routes = require("./routes/index");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// connect with database
connectDB();

app.use("/v1", Routes);

app.listen(port, () => {
  console.log("Server is runing at port ", port);
});
