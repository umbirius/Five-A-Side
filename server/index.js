import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import fieldRoutes from "./routes/fields.js"

const app = express();
dotenv.config()


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// cors needs to be called before routes to allow origin request (see)

app.use('/fields', fieldRoutes)

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
