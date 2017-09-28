import React from 'react';
import '../static/custom.css'

export default (props) => {
    return <thead>
        <tr>            
            {props.items.map((elem, i) => {
                 if (elem === 'children') {
                    return null
                } 

                return <th key={`header_${i}`} style={{width: props.columnsWidth[elem]}}>{elem}</th>
            })}

        </tr>
    </thead>
}