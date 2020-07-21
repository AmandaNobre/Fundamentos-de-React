import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmentos'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import Input from './components/formularios/Imput.jsx'

export default _ =>
    <div className="App">
        <h1>Fundamentos React (Arrow) </h1>
        <div className="Cards">
            <Card titulo="#11 Input" color="#00FFFF">
                <Input />
            </Card>

            <Card titulo="#10 Comunicação indireta" color="#00FFFF">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 Comunicação direta" color="#00FFFF">
                <DiretaPai />
            </Card>

            <Card titulo="#08 Impar ou Par" color="#00FFFF">
                <ParOuImpar
                    numero={2}
                />
                <UsuarioInfo usuario={{ nome: "Amanda" }} />
                <UsuarioInfo usuario={{ email: "Amanda.com" }} />
            </Card>

            <Card titulo="#07 Repetição" color="#00FFFF">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 Repetição" color="#00FFFF">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 Componente com filhos" color="#00CED1">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Amanda" />
                    <FamiliaMembro nome="Ana" />
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
