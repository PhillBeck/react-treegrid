import React from 'react'
import Row from './Row'
import UUID from 'uuid'
import equal from 'deep-equal'

class Body extends React.Component {

    constructor(props) {
        super()
        this.flattenArray = this.flattenArray.bind(this)
        this.removeChildren = this.removeChildren.bind(this)
        this.state = {dataToDisplay: this.flattenArray(props.data)}

    }

    clickHandler(key, index) {

        var tempState = this.state.dataToDisplay.slice(0)

        tempState[index]._showChildren = !tempState[index]._showChildren

        if (tempState[index]._showChildren) {
            this.insertInArray(
                tempState,
                index + 1,
                this.flattenArray(tempState[index].children, tempState[index]))
        } else {
            this.removeChildren(tempState, key)
        }

        this.setState({dataToDisplay: tempState})
    }

    removeChildren(array, key) {
        let childrenIndex = this.indexOfProperty(array, "_parent", key)

        while (childrenIndex !== -1) {
            this.removeChildren(array, array[childrenIndex]._key)
            array.splice(childrenIndex, 1)
            childrenIndex = this.indexOfProperty(array, "_parent", key)
        }
    }

    insertInArray(array, index, obj) {
        if (obj.constructor === Array) {
            obj.forEach((elem, i) => {
                array.splice(index + i, 0, elem)
            })
        } else {
            array.splice(index, 0, obj)
        }
    }

    indexOfProperty(array, property, value) {
        for (let i = 0; i < array.length; i ++) {
            if (array[i][property] === value) {
                return i
            }
        }

        return -1
    }

    componentWillReceiveProps(nextProps) {
        if (!equal(this.props, nextProps)) {
            this.setState({dataToDisplay: this.flattenArray(nextProps.data)})
	}
    }

    flattenArray(DataArray, parent, returnArray) {
        parent = parent || {}
        returnArray = returnArray || []

        if (parent._showChildren === false) {
            return returnArray
        }

        var level = parent._level === undefined ? 0 : parent._level + 1

        DataArray.forEach((element) => {
            let elemToAdd = {
                ...element,
                _hasChildren: element._hasChildren || false,
                _level: level,
                _parent: parent._key,
                _key: element._key || UUID.v4(),
                _showChildren: element._showChildren || false,
                _visible: parent._showChildren || true
            }

            returnArray.push(elemToAdd)
            if (element.children && element.children.constructor === Array) {
                elemToAdd._hasChildren = true
            }
        });

        return returnArray
    }

    render() {
        const rows = this.state.dataToDisplay.map((elem, i) =>
            <Row 
                key={`row_${i}`}
                options={this.props.options}
                data={elem}
                level={elem._level}
                index={i}
                onClick={this.clickHandler.bind(this)}
            />
        )

        return (
            <tbody>
                {rows}
            </tbody>
        )
    }
}

export default Body
