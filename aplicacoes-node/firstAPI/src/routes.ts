import { Router } from "express";
import { createUser, deleteAllUsers, listUsers } from "./controller/UserController"
import { createAccess, listAccess } from "./controller/AccessController"
import { createStore, listStores } from "./controller/StoreController"
import { createProduct, listProducts } from "./controller/ProductController"
import { signIn } from "./controller/SessionController"

export const router = Router()

router.post("/user", createUser)
router.get("/user/list", listUsers)
router.delete("/user/delete-all", deleteAllUsers)

router.post("/access", createAccess)
router.get("/access/list", listAccess)

router.post("/store/:userId", createStore)
router.get("/store/list", listStores)

router.post("/product/:storeId", createProduct)
router.get("/product/list", listProducts)

router.post("/sign-in", signIn)