import React from 'react'
import alunos from '../../data/alunos'

export default props => {

    const alunosLista = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -&gt; {aluno.nota}
            </li>
        )
    })


    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {alunosLista}
            </ul>
        </div>
    )
}