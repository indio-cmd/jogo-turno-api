import express from 'express'
import ControllerJogo from '../controller/jogo.js'

const router = express.Router()

router.get('/buscar', ControllerJogo.Buscar)
router.get('/buscarum/:id',  ControllerJogo.Buscarum)
router.post('/criar', ControllerJogo.Criar)
router.put('/alterar/:id',  ControllerJogo.Altera)
router.delete('/deletar/:id',  ControllerJogo.Deletar)



export default router