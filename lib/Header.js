'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../static/custom.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            null,
            props.items.map(function (elem, i) {
                if (elem === 'children') {
                    return null;
                }

                return _react2.default.createElement(
                    'th',
                    { key: 'header_' + i, style: { width: props.columnsWidth[elem] } },
                    elem
                );
            })
        )
    );
};