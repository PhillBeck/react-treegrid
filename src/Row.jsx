import React from 'react';
import '../static/font-awesome.css'
import '../static/custom.css'

const LEVEL_OFFSET = 16

class Row extends React.Component {

    constructor(props) {
        super(props)
        this.getExpandIcon = this.getExpandIcon.bind(this)
    }

    getExpandIcon(data, clickHandler) {
        if (data._hasChildren) {
            if (data._showChildren) {
                return <span className="treegrid-expander"><i className="fa fa-minus" onClick={clickHandler}></i></span>
            }

            return <span className="treegrid-expander"><i className="fa fa-plus" onClick={clickHandler}></i></span>
        }

        return <span className="treegrid-expander"></span>
    }

    clickHandler() {
        if (this.props.data._hasChildren) {
            this.props.onClick(this.props.data._key, this.props.index)
        }
    }

    getIndent(level) {
        return <span className="treegrid-indent" style={{width: level * LEVEL_OFFSET}}></span>
    }


    render() {
        if (!this.props.data._visible) {
            return null
        }

        var hasChildren = this.getExpandIcon(this.props.data, this.clickHandler.bind(this))

        const items = this.props.fields.map((field, i) => {
            if (field === 'children') {
                return null
            }

            var expandIcon
            var offset = i === 0 ? this.getIndent(this.props.level) : null

            if (i === 0) {
                expandIcon = hasChildren
            }
            
            return (
                <td key={`${this.props.data._id}_${field}`} >
                    <div>
                        {offset}
                        {expandIcon}
                        {"  " + (this.props.data[field] || '')}
                    </div>
                </td>
            )
        })

        return (
        <tr>
            {items}
        </tr>
        )
    }
}

export default Row