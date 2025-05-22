import "dotenv/config";
import express from "express";
import cors from "cors";
import myDb from "./Db.js";
import MemberRoute from "./Routes/MemberRoute.js";

myDb();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
//crud op get read, post create,patch/put update,delete delete
app.use(
  cors({
    origin: ["http://localhost:5173", "https://crud-op-frontend.vercel.app/"],
    methods: ["GET", "POST", "PUT", "HEAD", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("<p>Welcome to server</p>");
});

app.use("/member", MemberRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
