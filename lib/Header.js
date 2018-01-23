'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../static/custom.css');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            null,
            props.options.fields.map(function (elem, i) {
                if (elem === 'children') {
                    return null;
                }

                return _react2.default.createElement(
                    'th',
                    { style: { width: elem.width }, key: 'header_' + i + '_' + _uuid2.default.v4() },
                    elem.displayName
                );
            })
        )
    );
};