import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";
import { SendMailController } from "./controllers/SendMailController";
import { AnswersController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsCOntroller";
import { Router } from "express";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailCOntroller = new SendMailController();
const answersController = new AnswersController();
const npsController = new NpsController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailCOntroller.execute);

router.get("/answers/:value", answersController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };
