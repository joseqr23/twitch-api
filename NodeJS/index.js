import express from "express";
import twitchRouter from "./router/twitch.js";

const app = express()

app.use("/", twitchRouter); 

app.listen(5500, () => console.log(`Server start in http://localhost:5500`))


