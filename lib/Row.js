'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../static/custom.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LEVEL_OFFSET = 16;

var Row = function (_React$Component) {
    _inherits(Row, _React$Component);

    function Row(props) {
        _classCallCheck(this, Row);

        var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

        _this.getExpandIcon = _this.getExpandIcon.bind(_this);
        return _this;
    }

    _createClass(Row, [{
        key: 'getExpandIcon',
        value: function getExpandIcon(data, clickHandler) {
            if (data._hasChildren) {
                if (data._showChildren) {
                    return _react2.default.createElement(
                        'span',
                        { className: 'treegrid-expander' },
                        _react2.default.createElement('i', { className: 'fa fa-minus', onClick: clickHandler })
                    );
                }

                return _react2.default.createElement(
                    'span',
                    { className: 'treegrid-expander' },
                    _react2.default.createElement('i', { className: 'fa fa-plus', onClick: clickHandler })
                );
            }

            return _react2.default.createElement('span', { className: 'treegrid-expander' });
        }
    }, {
        key: 'clickHandler',
        value: function clickHandler() {
            if (this.props.data._hasChildren) {
                this.props.onClick(this.props.data._key, this.props.index);
            }
        }
    }, {
        key: 'getIndent',
        value: function getIndent(level) {
            return _react2.default.createElement('span', { className: 'treegrid-indent', style: { width: level * LEVEL_OFFSET } });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.props.data._visible) {
                return null;
            }

            var hasChildren = this.getExpandIcon(this.props.data, this.clickHandler.bind(this));

            var items = this.props.fields.map(function (field, i) {
                if (field === 'children') {
                    return null;
                }

                var expandIcon;
                var offset = i === 0 ? _this2.getIndent(_this2.props.level) : null;

                if (i === 0) {
                    expandIcon = hasChildren;
                }

                return _react2.default.createElement(
                    'td',
                    { key: _this2.props.data._id + '_' + field },
                    _react2.default.createElement(
                        'div',
                        null,
                        offset,
                        expandIcon,
                        "  " + (_this2.props.data[field] || '')
                    )
                );
            });

            return _react2.default.createElement(
                'tr',
                null,
                items
            );
        }
    }]);

    return Row;
}(_react2.default.Component);

exports.default = Row;