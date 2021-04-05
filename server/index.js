import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import fieldRoutes from "./routes/fields.js"

const app = express();
dotenv.config()

app.use('/fields', fieldRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
