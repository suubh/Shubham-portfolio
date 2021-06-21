"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.LoadingIndicatorEventHandler = LoadingIndicatorEventHandler;

var React = _interopRequireWildcard(require("react"));

var _emitter = _interopRequireDefault(require("../emitter"));

var _indicator = require("./indicator");

function LoadingIndicatorEventHandler() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    _emitter.default.on(`onDelayedLoadPageResources`, () => setVisible(true));

    _emitter.default.on(`onRouteUpdate`, () => setVisible(false));

    return () => {
      _emitter.default.off(`onDelayedLoadPageResources`, () => setVisible(true));

      _emitter.default.off(`onRouteUpdate`, () => setVisible(false));
    };
  }, []);
  return /*#__PURE__*/React.createElement(_indicator.Indicator, {
    visible: visible
  });
}