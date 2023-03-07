import { Router } from "express";
import * as Controller from "../controller/twitch.js"

const twitchRouter = Router();

twitchRouter.get("/", Controller.getAllFollowers);
twitchRouter.get("/:user", Controller.getProfileData);

export default twitchRouter;