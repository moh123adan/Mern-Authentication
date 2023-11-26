import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use("/api/users", userRoutes);

app.get("/", function (req, res) {
  res.send("server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, function (req, res) {
  console.log(`server started on port ${port}`);
});
