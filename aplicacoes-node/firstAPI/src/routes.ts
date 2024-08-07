import { Router } from "express";
import { createUser, deleteAllUsers, getUser, listUsers } from "./controller/UserController"
import { createAccess, listAccess } from "./controller/AccessController"
import { createStore, listStores } from "./controller/StoreController"
import { createProduct, deleteProduct, getProduct, listProducts, updateProduct } from "./controller/ProductController"
import { signIn } from "./controller/SessionController"
import { authMiddlewhare } from "./middlewares/AuthMiddleware"
import { createSale, listSales, listSalesByBuyer, listSalesBySeller } from "./controller/SaleController"

export const router = Router()

router.post("/sign-in", signIn)

router.post("/user", createUser)
router.get("/user", authMiddlewhare(["adm", "gerente", "logistica", "vendedor", "comprador"]), getUser)
router.get("/user/list", authMiddlewhare(["adm", "gerente"]), listUsers)
router.delete("/user/delete-all", authMiddlewhare(["adm"]), deleteAllUsers)

router.post("/access", authMiddlewhare(["adm", "gerente"]), createAccess)
router.get("/access/list", authMiddlewhare(["adm", "gerente"]), listAccess)

router.post("/store", authMiddlewhare(["adm"]), createStore)
router.get("/store/list", authMiddlewhare(["adm", "gerente"]), listStores)

router.post("/product/:storeId", authMiddlewhare(["adm", "gerente", "logistica"]), createProduct)
router.patch("/product/:productId", authMiddlewhare(["adm", "gerente", "logistica"]), updateProduct)
router.get("/product/list", authMiddlewhare(["adm", "gerente", "logistica", "vendedor", "comprador"]), listProducts)
router.get("/product/:productId", authMiddlewhare(["adm", "gerente", "logistica", "vendedor", "comprador"]), getProduct)
router.delete("/product/:productId", authMiddlewhare(["adm", "gerente", "logistica"]), deleteProduct)


router.post("/sale", authMiddlewhare(["adm", "vendedor", "comprador"]), createSale)
router.get("/sale/list", authMiddlewhare(["adm", "gerente"]), listSales)
router.get("/sale/list-buyer", authMiddlewhare(["adm", "gerente", "comprador"]), listSalesByBuyer)
router.get("/sale/list-seller", authMiddlewhare(["adm", "gerente", "vendedor"]), listSalesBySeller)