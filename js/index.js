var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //  React
var
PageComponent = function (_React$Component) {_inherits(PageComponent, _React$Component);
  function PageComponent(props) {_classCallCheck(this, PageComponent);var _this = _possibleConstructorReturn(this, (PageComponent.__proto__ || Object.getPrototypeOf(PageComponent)).call(this,
    props));
    _this.state = {
      input: '# This is a header size H1\n## This is a sub header size H2\nThis is a link to [Markdown Tutorial](https://guides.github.com/features/mastering-markdown/)\nThis is a inline code `console.log(\'Hello World!\')`\nThis is a code block:\n```\n<div>\n\t<p>Markdown is awesome!</p>\n</div>\n```\nYou may make lists:\n1. Sunday\n1. Monday\n1. Tuesday\n\nDo you want a motivating reflection?\n> Remember that not getting what you want is sometimes a wonderful stroke of luck.\n>-Dalai Lama\n\n**This is a bold text**\nYou may show embbeded images:\n\n![MilkyWay](https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Milky_Way_2005.jpg/800px-Milky_Way_2005.jpg)' };

    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(PageComponent, [{ key: 'handleChange', value: function handleChange(
    event) {
      this.setState({ input: event.target.value });
    } }, { key: 'render', value: function render()
    {
      //const textEditor = this.state.input.replace(/\n/, '<br>');
      return (
        React.createElement('div', { className: 'row', style: { display: 'flex', 'justify-content': 'center' } },
          React.createElement('textarea', { id: 'editor', className: 'col-11 col-md-5', onChange: this.handleChange }, this.state.input),
          React.createElement('div', { className: 'col-sm-1' }),
          React.createElement('div', { id: 'preview', className: 'col-11 col-md-5', dangerouslySetInnerHTML: { __html: marked(this.state.input) } })));


    } }]);return PageComponent;}(React.Component);


ReactDOM.render(React.createElement(PageComponent, null), document.getElementById('root'));

//style={{display: 'flex', 'justify-content': 'center', 'align-items': 'center'}}

// jQuery

$(document).ready(function () {
  $('img').addClass('image-responsive');
  $('a').prop('target', '_blank');
});