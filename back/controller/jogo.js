import ServiceJogo from '../service/jogo.js'

class ControllerUser {

    async Buscar(req, res) {
        try {
            const jogo = await ServiceJogo.Buscar()

            res.status(200).send({ jogo })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Buscarum(req, res) {
        try {
            const id = req.params.id
            const jogo = await ServiceJogo.Buscarum(id)

            res.status(200).send({ jogo })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const {descricao, data, vencedor } = req.body

            await ServiceJogo.Criar(descricao, data, vencedor)

            res.status(201).send({ message: "Jogo criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Altera(req, res) {
        try {
            const id = req.params.id
            const {descricao, data, vencedor } = req.body

            await ServiceJogo.Altera(id,descricao, data, vencedor)

            res.status(200).send({ message: "Jogo alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServiceJogo.Deletar(id)

            res.status(200).send({ message: "Jogo deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}
export default new ControllerUser 