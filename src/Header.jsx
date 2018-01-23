import React from 'react';
import '../static/custom.css'
import uuid from 'uuid'

export default (props) => {
    return <thead>
        <tr> 
            {props.options.fields.map((elem, i) => {
                if (elem === 'children') {
                    return null
                }

                return (
                    <th style={{width: elem.width}} key={`header_${i}_${uuid.v4()}`} >
                       {elem.displayName}
                    </th>
                )
            })}
        </tr>
    </thead>
}
