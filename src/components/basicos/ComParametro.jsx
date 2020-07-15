import React from 'react'

export default function ComParametro(props) {
    const situacao = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.aluno} está {situacao}</p>
        </div>
    )
}