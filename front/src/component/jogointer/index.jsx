import "./style.css"

import { joguinho } from "../../api/jogo"

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function jogointer() {


    const navigate = useNavigate()
    const [atacar, setAtacar] = useState('')
    const [curar, setCurar] = useState('')
    const [defesa, setDefesa] = useState('')
    const [status, setStatus] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [vencedor, setVencedor] = useState('')
    
    
 const handleSubmit = async (e) => {
    e.preventDefault() // para o envio automatico do formulario
    const response = await loginUser(email, senha)
    localStorage.setItem("token", response.token)
  }



    // descricao, data, vencedor

    return (
        <div>




        </div>
    )
}

export default jogointer