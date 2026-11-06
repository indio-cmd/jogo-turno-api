import express from "express"
import controllerPartida from "../controller/partida.js"

const router = express.Router()

router.get('/Buscar',controllerPartida.Buscar)

router.get('/Detalhe',controllerPartida.Detalhe)

router.post('/Criar',controllerPartida.Criar)

router.put('/Alterar',controllerPartida.Alterar)

router.delete('/Deletar',controllerPartida.Deletar)

export default router