import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import helmet from "helmet";
import bodyParser from "body-parser";
import kpiRoutes from "./routes/kpi.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy( { policy: "cross-origin" } ));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use("/kpi", kpiRoutes)

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => console.log(`server is up and running at Port: ${PORT}`))
    })
    .catch((error) => console.log(`error: ${error}`))