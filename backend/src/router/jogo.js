import express from "express"
import jogo from "../controller/jogo.js"

const router = express.Router()
router.get("/buscar/partida/criada/:id")

router.get("/status", jogo.status )

router.post("/jogada/atacar", jogo.atacar)

router.post("/jogada/defender", jogo.defender)

router.post("/jogada/curar", jogo.curar)

export default router