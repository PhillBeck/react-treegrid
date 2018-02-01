'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body(props) {
        _classCallCheck(this, Body);

        var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));

        _this.flattenArray = _this.flattenArray.bind(_this);
        _this.removeChildren = _this.removeChildren.bind(_this);
        _this.state = { dataToDisplay: _this.flattenArray(props.data) };

        return _this;
    }

    _createClass(Body, [{
        key: 'clickHandler',
        value: function clickHandler(key, index) {

            var tempState = this.state.dataToDisplay.slice(0);

            tempState[index]._showChildren = !tempState[index]._showChildren;

            if (tempState[index]._showChildren) {
                this.insertInArray(tempState, index + 1, this.flattenArray(tempState[index].children, tempState[index]));
            } else {
                this.removeChildren(tempState, key);
            }

            this.setState({ dataToDisplay: tempState });
        }
    }, {
        key: 'removeChildren',
        value: function removeChildren(array, key) {
            var childrenIndex = this.indexOfProperty(array, "_parent", key);

            while (childrenIndex !== -1) {
                this.removeChildren(array, array[childrenIndex]._key);
                array.splice(childrenIndex, 1);
                childrenIndex = this.indexOfProperty(array, "_parent", key);
            }
        }
    }, {
        key: 'insertInArray',
        value: function insertInArray(array, index, obj) {
            if (obj.constructor === Array) {
                obj.forEach(function (elem, i) {
                    array.splice(index + i, 0, elem);
                });
            } else {
                array.splice(index, 0, obj);
            }
        }
    }, {
        key: 'indexOfProperty',
        value: function indexOfProperty(array, property, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][property] === value) {
                    return i;
                }
            }

            return -1;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!(0, _deepEqual2.default)(this.props, nextProps)) {
                this.setState({ dataToDisplay: this.flattenArray(nextProps.data) });
            }
        }
    }, {
        key: 'flattenArray',
        value: function flattenArray(DataArray, parent, returnArray) {
            parent = parent || {};
            returnArray = returnArray || [];

            if (parent._showChildren === false) {
                return returnArray;
            }

            var level = parent._level === undefined ? 0 : parent._level + 1;

            DataArray.forEach(function (element) {
                var elemToAdd = _extends({}, element, {
                    _hasChildren: element._hasChildren || false,
                    _level: level,
                    _parent: parent._key,
                    _key: element._key || _uuid2.default.v4(),
                    _showChildren: element._showChildren || false,
                    _visible: parent._showChildren || true
                });

                returnArray.push(elemToAdd);
                if (element.children && element.children.constructor === Array) {
                    elemToAdd._hasChildren = true;
                }
            });

            return returnArray;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var rows = this.state.dataToDisplay.map(function (elem, i) {
                return _react2.default.createElement(_Row2.default, {
                    key: 'row_' + i,
                    options: _this2.props.options,
                    data: elem,
                    level: elem._level,
                    index: i,
                    onClick: _this2.clickHandler.bind(_this2)
                });
            });

            return _react2.default.createElement(
                'tbody',
                null,
                rows
            );
        }
    }]);

    return Body;
}(_react2.default.Component);

exports.default = Body;