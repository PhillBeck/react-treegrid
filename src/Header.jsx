import React from 'react';
import '../static/custom.css'

export default (props) => {
    return <thead>
        <tr> 
            {props.options.fields.map((elem, i) => {
                if (elem === 'children') {
                    return null
                }

                return (
                    <th style={{width: elem.width}} key={`header_${i}`} >
                       {elem.displayName}
                    </th>
                )
            })}
        </tr>
    </thead>
}