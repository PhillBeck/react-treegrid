import React from 'react';
import '../static/custom.css'
import UUID from 'uuid'

const LEVEL_OFFSET = 16

class Row extends React.Component {

    constructor(props) {
        super(props)
        this.getExpandIcon = this.getExpandIcon.bind(this)
        this.getContent = this.getContent.bind(this)
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

    getContent(field) {
        var format = field.format
	var property = field.property

        if (format && typeof format === 'function') {
            return format(this.props.data[property])
        }

        if (this.props.data[property] === null || this.props.data[property] === undefined) {
            return ''
        }

        return this.props.data[property]
    }


    render() {
        if (!this.props.data._visible) {
            return null
        }

        var hasChildren = this.getExpandIcon(this.props.data, this.clickHandler.bind(this))

        const items = this.props.options.fields.map((field, i) => {
            if (field.property === 'children') {
                return null
            }

            var expandIcon
            var offset = i === 0 ? this.getIndent(this.props.level) : null

            if (i === 0) {
                expandIcon = hasChildren
            }
            
            return (
                <td key={`${this.props.data._id}_${field.property}_${UUID.v4()}`} >
                    <div>
                        {offset}
                        {expandIcon}
                        {this.getContent(field)}
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
