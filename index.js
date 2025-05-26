import "dotenv/config";
import express from "express";
import cors from "cors";
import myDb from "./Db.js";
import MemberRoute from "./Routes/MemberRoute.js";

const app = express();
const PORT = process.env.PORT || 8000;

myDb()
  .then(() => {
    app.use(express.json());

    app.use(
      cors({
        origin: [
          "http://localhost:5173",
          "https://crud-op-frontend.vercel.app",
        ],
        methods: ["GET", "POST", "PUT", "HEAD", "PATCH", "DELETE"],
        credentials: true,
      })
    );

    app.get("/", (req, res) => {
      res.send("<p>Welcome to server</p>");
    });

    app.use("/member", MemberRoute);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
  });
