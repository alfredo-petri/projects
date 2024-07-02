import express from "express"
import { router } from "./routes"


// app.get("/", (req, res) => {
//     return res.json({ message: "deu boa" })
// })

const app = express()
app.use(express.json())
app.use(router)



app.listen(3333, () => console.log("Server started"))