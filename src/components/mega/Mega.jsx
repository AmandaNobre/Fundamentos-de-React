import React, { useState } from 'react'

export default props => {
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    const numerosIniciais = Array().fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
    const [qtde, setQtde] = useState(props.qtde || 6)

    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtd números</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar números
            </button>
        </div>
    )
}

