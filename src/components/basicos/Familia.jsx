import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Amanda" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Amanda" {...props}/>
        </div>
    )
}