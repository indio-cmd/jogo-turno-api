import express from "express"
import cntrollerjogo from "../controller/jogo.js"

const router = express.Router()
router.post("/jogada/status", cntrollerjogo.status)
        
router.post("/jogada/inimigojoga", cntrollerjogo.inimigoJoga)

router.post("/jogada/atacar", cntrollerjogo.atacar)

router.post("/jogada/defender", cntrollerjogo.defender)         

router.post("/jogada/curar", cntrollerjogo.curar)

export default router