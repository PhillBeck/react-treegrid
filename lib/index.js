'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../static/custom.css');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeGrid = function (_Component) {
  _inherits(TreeGrid, _Component);

  function TreeGrid(props) {
    _classCallCheck(this, TreeGrid);

    var _this = _possibleConstructorReturn(this, (TreeGrid.__proto__ || Object.getPrototypeOf(TreeGrid)).call(this));

    _this.getHeaderElems = _this.getHeaderElems.bind(_this);
    return _this;
  }

  _createClass(TreeGrid, [{
    key: 'getHeaderElems',
    value: function getHeaderElems() {
      return Object.keys(this.props.data[0]);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          { className: 'table table-striped table-hover' },
          _react2.default.createElement(_Header2.default, { items: this.getHeaderElems(), columnsWidth: this.props.columnWidth }),
          _react2.default.createElement(_Body2.default, { fields: this.getHeaderElems(), data: this.props.data })
        )
      );
    }
  }]);

  return TreeGrid;
}(_react.Component);

exports.default = TreeGrid;