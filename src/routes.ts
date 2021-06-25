import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiverComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post("/tags",ensureAuthenticated, ensureAdmin , createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments",ensureAuthenticated, createComplimentController.handle)



router.get("/users/compliments/send",ensureAuthenticated, listUserSendComplimentsController.handle )
router.get("/users/compliments/receive",ensureAuthenticated,  listUserReceiverComplimentsController.handle )

router.get("/tags", ensureAuthenticated ,listTagsController.handle )

router.get("/users", listUsersController.handle )

export { router }