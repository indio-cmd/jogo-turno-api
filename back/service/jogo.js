import RepositoryPartida from '../repository/jogo.js'

class ServiceJogo {

    async Buscar() {
        return RepositoryPartida.Buscar()
    }

    async Buscarum(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryPartida.Buscarum(id)
    }

    async Criar(descricao, data, vencedor) {
        if (!descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parâmetros!!")
        }


        await RepositoryPartida.Criar(descricao, data, vencedor)
    }

    async Altera(id, descricao, data, vencedor) {
        if (!id || !descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parâmetros!!")
        }

     
        await RepositoryPartida.Altera(id, descricao, data, vencedor)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryPartida.Deletar(id)
    }


}

export default new ServiceJogo() 