import { Router } from "express";
import { createUser, deleteAllUsers, getUser, listUsers } from "./controller/UserController"
import { createAccess, listAccess } from "./controller/AccessController"
import { createStore, listStores } from "./controller/StoreController"
import { createProduct, listProducts } from "./controller/ProductController"
import { signIn } from "./controller/SessionController"
import { authMiddlewhare } from "./middlewares/AuthMiddleware"

export const router = Router()

// router.post("/user", createUser)
// router.get("/user", getUser)
// router.get("/user/list", authMiddlewhare(["adm", "gerente"]), listUsers)
// router.delete("/user/delete-all", authMiddlewhare(["adm"]), deleteAllUsers)

// router.post("/access", authMiddlewhare(["adm", "gerente"]), createAccess)
// router.get("/access/list", authMiddlewhare(["adm", "gerente"]), listAccess)

// router.post("/store/:userId", authMiddlewhare(["adm"]), createStore)
// router.get("/store/list", authMiddlewhare(["adm", "gerente"]), listStores)

// router.post("/product/:storeId", authMiddlewhare(["adm", "gerente", "logistica"]), createProduct)
// router.get("/product/list", authMiddlewhare(["adm", "gerente", "logistica", "vendedor"]), listProducts)

// router.post("/sign-in", signIn)

router.post("/user", createUser)
router.get("/user", getUser)
router.get("/user/list", listUsers)
router.delete("/user/delete-all", deleteAllUsers)

router.post("/access", createAccess)
router.get("/access/list", listAccess)

router.post("/store/:userId", createStore)
router.get("/store/list", listStores)

router.post("/product/:storeId", createProduct)
router.get("/product/list", listProducts)

router.post("/sign-in", signIn)