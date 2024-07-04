import { Router } from "express";
import { createUser, deleteAllUsers } from "./controller/UserController"
import { createAccess, listAccess } from "./controller/AccessController"

export const router = Router()

router.post("/user", createUser)
router.delete("/user/delete-all", deleteAllUsers)
router.post("/access", createAccess)
router.get("/access/list", listAccess)
