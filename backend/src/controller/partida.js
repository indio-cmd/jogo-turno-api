
import ServicePartida from "../service/partida.js"

class controllerPartida {

    async Buscar(res,_) {
        try {

            const partidas = await ServicePartida.Buscar()

            res.status(200).send({
                mensage:"Aqui estão suas partidas",
                partidas

            })

        } catch (error) {

            res.status(500).send({

                message: error.message

            })

        }

    }

    async Detalhe(req, res) {
        try {

            const id = req.params.id
            
            const partida = await ServicePartida.Detalhe(id)


            res.status(200).send({
                mensage:"Aqui o resultado de sua busca",
                partida

            })

        } catch (error) {

            res.status(500).send({

                message: error.message

            })

        }


    }

    async Criar(req, res) {
        
        try {

            const  { descricao, data, vencedor }  = req.body

            await ServicePartida.Criar(descricao, data, vencedor)

            res.send(201).send({

                message: "Partida criada com sucesso"

            })

        } catch (error) {

            res.status(500).send({

                message: error.message

            })

        }
    }

    async Alterar(req, res) {

        try {

            const id = req.params.id

            const { descricao, data, vencedor } = req.body

            await ServicePartida.Alterar(id,descricao, data, vencedor)

            res.send(200).send({

                message: "Partida alterado com sucesso"

            })

        } catch (error) {

            res.status(500).send({

                message: error.message

            })
        }
    }

    async Deletar(req, res) {

        try {

            const id = req.params.id

            await ServicePartida.Deletar(id)

            res.send(204).send({

                message: "Partida deletada com sucesso"

            })

        } catch (error) {

            res.status(500).send({

                message: error.message

            })
        }

    }
}
    

    export default new controllerPartida