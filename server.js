// Importing Dependences

require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("./models/connections");
const cors = require("cors");
const FoamRouter = require("./controllers/foam");
const PORT = process.env.PORT;
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/foam", FoamRouter);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
