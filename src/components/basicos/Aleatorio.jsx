import React from 'react'

export default props => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <strong>Valor aleatório</strong>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>Valor sorteado: {aleatorio}</p>
        </div>
    )

}
