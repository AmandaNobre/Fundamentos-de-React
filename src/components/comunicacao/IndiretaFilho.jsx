import React from 'react'

export default props => {
    const gerarIdade = () => parseInt(Math.rando() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar('João', gerarIdade(), gerarNerd())
            }>
                Fornecer informações
            </button>
        </div>
    )
}