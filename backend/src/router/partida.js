import express from "express"
import controllerPartida from "../controller/partida.js"

const router = express.Router()

router.get('/buscar',controllerPartida.Buscar)
router.get('/buscarum',controllerPartida.Detalhe)
router.post('/criar',controllerPartida.Criar)
router.put('/alterar',controllerPartida.Alterar)
router.delete('/deletar',controllerPartida.Deletar)

export default router