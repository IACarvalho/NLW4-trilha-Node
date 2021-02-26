import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";
import { SendMailCOntroller } from "./controllers/SendMailCOntroller";
import { Router } from "express";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailCOntroller = new SendMailCOntroller();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailCOntroller.execute);

export { router };
