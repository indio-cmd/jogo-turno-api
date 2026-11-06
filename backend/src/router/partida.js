import express from "express"
import controllerPartida from "../controller/partida.js"

const router = express.Router()

router.get('/buscar',controllerPartida.Buscar)
router.get('/buscarum/:id',controllerPartida.Detalhe)
router.post('/criar',controllerPartida.Criar)
router.put('/alterar/:id',controllerPartida.Alterar)
router.delete('/deletar/:id',controllerPartida.Deletar)

export default router