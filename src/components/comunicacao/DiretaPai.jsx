import React from 'react'

import Filho from './DiretaFilho'
export default props => {
    return(
        <div>
            <Filho
                texto= {"Filho "} 
                idade={20} 
                nerd={true}
            />
        </div>
    )
}