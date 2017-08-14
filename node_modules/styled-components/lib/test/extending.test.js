'use strict';

var _templateObject = _taggedTemplateLiteralLoose([''], ['']),
    _templateObject2 = _taggedTemplateLiteralLoose(['color: blue;'], ['color: blue;']),
    _templateObject3 = _taggedTemplateLiteralLoose(['color: red;'], ['color: red;']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n      color: blue;\n      > h1 { font-size: 4rem; }\n    '], ['\n      color: blue;\n      > h1 { font-size: 4rem; }\n    ']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n      color: ', ';\n    '], ['\n      color: ', ';\n    ']),
    _templateObject6 = _taggedTemplateLiteralLoose(['background-color: green;'], ['background-color: green;']),
    _templateObject7 = _taggedTemplateLiteralLoose(['color: green;'], ['color: green;']),
    _templateObject8 = _taggedTemplateLiteralLoose(['color:red;'], ['color:red;']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n      background-color: red;\n    '], ['\n      background-color: red;\n    ']),
    _templateObject10 = _taggedTemplateLiteralLoose(['\n      color: blue;\n    '], ['\n      color: blue;\n    ']),
    _templateObject11 = _taggedTemplateLiteralLoose(['\n      border: 2px solid black;\n    '], ['\n      border: 2px solid black;\n    ']),
    _templateObject12 = _taggedTemplateLiteralLoose(['\n      border-width: 10;\n    '], ['\n      border-width: 10;\n    ']),
    _templateObject13 = _taggedTemplateLiteralLoose(['\n      color: red;\n    '], ['\n      color: red;\n    ']),
    _templateObject14 = _taggedTemplateLiteralLoose(['\n      color: green;\n    '], ['\n      color: green;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var styled = void 0;

describe('extending', function () {
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should generate empty classes with no styles', function () {
    var Parent = styled.div(_templateObject);
    var Child = Parent.extend(_templateObject);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.sc-a {} .sc-b {}');
  });

  it('should attach styles to both classes if only parent has styles', function () {
    var Parent = styled.div(_templateObject2);
    var Child = Parent.extend(_templateObject);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.sc-a {} .c { color: blue; } .sc-b {} .d { color: blue; }');
  });

  it('should attach styles to child class if only child has styles', function () {
    var Parent = styled.div(_templateObject);
    var Child = Parent.extend(_templateObject2);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.sc-a {} .sc-b {} .d { color: blue; }');
  });

  it('should generate a class for the child with the rules of the parent', function () {
    var Parent = styled.div(_templateObject2);
    var Child = Parent.extend(_templateObject3);

    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.sc-b {} .c { color: blue;color: red; }');
  });

  it('should generate different classes for both parent and child', function () {
    var Parent = styled.div(_templateObject2);
    var Child = Parent.extend(_templateObject3);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('.sc-a {} .c { color: blue; } .sc-b {} .d { color: blue;color: red; }');
  });

  it('should copy nested rules to the child', function () {
    var Parent = styled.div(_templateObject4);
    var Child = Parent.extend(_templateObject3);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('\n      .sc-a {}\n      .c{ color: blue; }\n      .c > h1{ font-size: 4rem; }\n      .sc-b {}\n      .d { color: blue; color: red; }\n      .d > h1 { font-size: 4rem; }\n    ');
  });

  it('should keep default props from parent', function () {
    var Parent = styled.div(_templateObject5, function (props) {
      return props.color;
    });
    Parent.defaultProps = {
      color: 'red'
    };

    var Child = Parent.extend(_templateObject6);

    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('\n      .sc-a {} .c { color: red; }\n      .sc-b {} .d { color: red; background-color: green; }\n    ');
  });

  it('should keep prop types from parent', function () {
    var Parent = styled.div(_templateObject5, function (props) {
      return props.color;
    });
    Parent.propTypes = {
      color: _propTypes2.default.string
    };

    var Child = Parent.extend(_templateObject6);

    expect(Child.propTypes).toEqual(Parent.propTypes);
  });

  it('should keep custom static member from parent', function () {
    var Parent = styled.div(_templateObject3);

    Parent.fetchData = function () {
      return 1;
    };

    var Child = Parent.extend(_templateObject7);

    expect(Child.fetchData).toBeTruthy();
    expect(Child.fetchData()).toEqual(1);
  });

  it('should keep static member in triple inheritance', function () {
    var GrandParent = styled.div(_templateObject3);
    GrandParent.fetchData = function () {
      return 1;
    };

    var Parent = GrandParent.extend(_templateObject3);
    var Child = Parent.extend(_templateObject8);

    expect(Child.fetchData).toBeTruthy();
    expect(Child.fetchData()).toEqual(1);
  });

  it('should keep styles in >= 3 inheritances', function () {
    var GrandGrandParent = styled.div(_templateObject9);

    var GrandParent = GrandGrandParent.extend(_templateObject10);

    var Parent = GrandParent.extend(_templateObject11);

    var Child = Parent.extend(_templateObject12);

    (0, _enzyme.shallow)(_react2.default.createElement(GrandGrandParent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(GrandParent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Parent, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Child, null));

    (0, _utils.expectCSSMatches)('\n      .sc-a { }\n      .e { background-color: red; }\n      .sc-b { }\n      .f { background-color: red; color: blue; }\n      .sc-c { }\n      .g { background-color: red; color: blue; border: 2px solid black; }\n      .sc-d { }\n      .h { background-color: red; color: blue; border: 2px solid black; border-width: 10; }\n    ');
  });

  it('should allow changing component', function () {
    var Parent = styled.div(_templateObject3);
    var Child = Parent.withComponent('span');

    expect((0, _enzyme.shallow)(_react2.default.createElement(Child, null)).html()).toEqual('<span class="sc-b c"></span>');
  });

  it('should allow changing component and extending', function () {
    var Parent = styled.div(_templateObject13);
    var Child = Parent.withComponent('span').extend(_templateObject14);

    expect((0, _enzyme.shallow)(_react2.default.createElement(Child, null)).html()).toEqual('<span class="sc-c d"></span>');
    (0, _utils.expectCSSMatches)('\n      .sc-c {} .d { color: red; color: green; }\n    ');
  });

  it('should allow changing component and adding attributes', function () {
    var Parent = styled.button(_templateObject13);
    var Child = Parent.withComponent('a').extend.attrs({
      href: '/test'
    })(_templateObject);

    expect((0, _enzyme.shallow)(_react2.default.createElement(Child, null)).html()).toEqual('<a href="/test" class="sc-c d"></a>');
  });
});