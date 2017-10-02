'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../src/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_index2.default, { data: [{
            Header1: 'text1',
            Header2: 'text2',
            Header3: 'text3',
            children: [{
                Header1: 'children1',
                Header2: 'children2',
                Header3: 'children3',
                children: [{
                    Header1: 'children1.1',
                    Header2: 'children 1.2'
                }]
            }]
        }, {
            Header1: 'text1.2',
            Header3: 'text3.2'
        }],
        options: {
            fields: [{ property: 'Header1', displayName: 'Header 1', width: '50%' }, { property: 'Header2', displayName: 'Header 2', width: '35%' }, { property: 'Header3', displayName: 'Header 3', width: '15%' }]
        }
    }), div);
});