import api from './api'

//buscar
export const buscarpartida = async () => {
    const response = await api.get('/api/v1/partida/buscar')

return response.data
}

//buscarum
export const buscarumpartida = async () => {
    const response = await api.get('/api/v1/partida/buscarum')

    return response.data
}

//criar
export const criarpartida = async ( descricao, data, vencedor) => {
    const body = { descricao, data, vencedor}

    const response = await api.post('/api/v1/partida/criar', body, {
        headers: {'Content-Type': 'application/json'}
    })

response.data
}

//alterar
export const alterarpartida = async ( descricao, data, vencedor) => {
    const body = { descricao, data, vencedor}

    const response = await api.put('/api/v1/partida/alterar', body, {
        headers: {'Content-Type': 'application/json'}
    })

    response.data
}

//deletar
export const deletarpartida = async () => {

    const response = await api.delete('/api/v1/partida/deletar')

    response.data
}


export const status = async (status) => {
    const body = {status}

    const response = await api.post('/api/v1/jogada/status', body, {
        headers: {'Content-Type': 'application/json'}
    })

    response.data
}

export const atacar = async (atacar) => {
    const body = {atacar}

    const response = await api.post('/api/v1/jogada/atacar', body, {
        headers: {'Content-Type': 'application/json'}
    })

    response.data
}

export const defesa = async (defesa) => {
    const body = {defesa}

    const response = await api.post('/api/v1/jogada/defesa', body, {
        headers: {'Content-Type': 'application/json'}
    })

    response.data
}

export const curar = async (curar) => {
    const body = {curar}

    const response = await api.post('/api/v1/jogada/curar', body, {
        headers: {'Content-Type': 'application/json'}
    })

    response.data
}

