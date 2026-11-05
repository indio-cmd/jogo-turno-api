import RepositoryUser from '../repository/jogo.js'

class ServiceUser {

    async Buscar() {
        return RepositoryUser.Buscar()
    }

    async Buscarum(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryUser.Buscarum(id)
    }

    async Criar(descricao, data, vencedor) {
        if (!descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parâmetros!!")
        }


        await RepositoryUser.Criar(descricao, data, vencedor)
    }

    async Altera(id, descricao, data, vencedor) {
        if (!id || !descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parâmetros!!")
        }

     
        await RepositoryUser.Alterar(id, descricao, data, vencedor)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryUser.Deletar(id)
    }


}

export default new ServiceUser() 