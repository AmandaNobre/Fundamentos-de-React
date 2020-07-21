import React from 'react'

import Display from './Display'
import PassoForm from './Passoform'
import Botoes from './Botoes'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPAsso) => {
        this.setState({
            passo: novoPAsso
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}