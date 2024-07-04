import { Router } from "express";
import { createUser } from "./controller/UserController";
import { createAccess, listAccess } from "./controller/AccessController"

export const router = Router()

router.post("/user", createUser)
router.post("/access", createAccess)
router.get("/access/list", listAccess)
