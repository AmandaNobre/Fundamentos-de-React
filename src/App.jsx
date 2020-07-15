import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmentos'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/basicos/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default _ =>
    <div className="App">
        <h1>Fundamentos React (Arrow) </h1>
        <div className="Cards">
            <Card titulo="#05 Componente com filhos" color="#00CED1">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Amanda"/>
                    <FamiliaMembro nome="Ana"/>
                </Familia>
                    
            </Card>

                <Card titulo="#04 Desafio Aleatório" color="#40E0D0">
                    <Aleatorio
                        min={1}
                        max={10}
                    />
                </Card>

                <Card titulo="#03 Fragmento" color="#48D1CC">
                    <Fragmento />
                </Card>

                <Card titulo="#02 Com Parâmetro" color="#20B2AA">
                    <ComParametro
                        titulo="Dados do aluno"
                        aluno="Thiago"
                        nota={9.9} />
                </Card>

                <Card titulo="#01 Primeiro COmponente" color="#008B8B">
                    <Primeiro></Primeiro>
                </Card>
        </div>
        </div>
