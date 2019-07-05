const express    = require('express');
const mongoose   = require('mongoose');
const requireDir = require('require-dir');
const cors       = require("cors");
require ('dotenv'). config ();

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DB_CONN,{useNewUrlParser:true});

requireDir('./src/models/');

app.use("/api",require("./src/routes/routes"));

app.listen(3001);
