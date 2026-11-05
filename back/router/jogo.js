import express from 'express'
import ControllerJogo from '../controller/jogo.js'

const router = express.Router()

router.get('/buscar', ControllerJogo.Buscar)
router.get('/buscarum',  ControllerJogo.Buscarum)
router.post('/criar', ControllerJogo.Criar)
router.put('/alterar',  ControllerJogo.Altera)
router.delete('/deletar',  ControllerJogo.Deletar)



export default router