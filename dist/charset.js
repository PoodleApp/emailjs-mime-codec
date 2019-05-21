'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = exports.arr2str = exports.encode = undefined;
exports.decode = decode;

var _encoding = require('encoding');

var _encoding2 = _interopRequireDefault(_encoding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Encodes an unicode string into an Uint8Array object as UTF-8
 *
 * @param {String} str String to be encoded
 * @return {Uint8Array} UTF-8 encoded typed array
 */
var encode = exports.encode = function encode(str) {
  return _encoding2.default.convert(str, 'UTF-8');
};

var arr2str = exports.arr2str = function arr2str(arr) {
  return String.fromCharCode.apply(null, arr);
};

/**
 * Decodes a string from Uint8Array to an unicode string using specified encoding
 *
 * @param {Uint8Array} buf Binary data to be decoded
 * @param {String} Binary data is decoded into string using this charset
 * @return {String} Decoded string
 */
function decode(buf) {
  var fromCharset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf-8';

  var charsets = [{ charset: normalizeCharset(fromCharset) }, { charset: 'utf-8' }, { charset: 'iso-8859-15' }];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = charsets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var charset = _step.value.charset;

      try {
        return convert(buf, charset).toString('utf-8');
      } catch (e) {}
    }

    // return arr2str(buf) // all else fails, treat it as binary
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return "whoops";
}

/**
 * Convert a string from specific encoding to UTF-8 Uint8Array
 *
 * @param {String|Uint8Array} data Data to be encoded
 * @param {String} Source encoding for the string (optional for data of type String)
 * @return {Uint8Array} UTF-8 encoded typed array
 */
var convert = exports.convert = function convert(data, fromCharset) {
  return _encoding2.default.convert(data, 'UTF-8', fromCharset);
};

function normalizeCharset() {
  var charset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'utf-8';

  var match = void 0;

  if (match = charset.match(/^utf[-_]?(\d+)$/i)) {
    return 'UTF-' + match[1];
  }

  if (match = charset.match(/^win[-_]?(\d+)$/i)) {
    return 'WINDOWS-' + match[1];
  }

  if (match = charset.match(/^latin[-_]?(\d+)$/i)) {
    return 'ISO-8859-' + match[1];
  }

  return charset;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyc2V0LmpzIl0sIm5hbWVzIjpbImRlY29kZSIsImVuY29kZSIsImVuY29kaW5nIiwiY29udmVydCIsInN0ciIsImFycjJzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsImFyciIsImJ1ZiIsImZyb21DaGFyc2V0IiwiY2hhcnNldHMiLCJjaGFyc2V0Iiwibm9ybWFsaXplQ2hhcnNldCIsInRvU3RyaW5nIiwiZSIsImRhdGEiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBbUJnQkEsTSxHQUFBQSxNOztBQW5CaEI7Ozs7OztBQUVBOzs7Ozs7QUFNTyxJQUFNQywwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBT0MsbUJBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCLE9BQXRCLENBQVA7QUFBQSxDQUFmOztBQUVBLElBQU1DLDRCQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUFPQyxPQUFPQyxZQUFQLENBQW9CQyxLQUFwQixDQUEwQixJQUExQixFQUFnQ0MsR0FBaEMsQ0FBUDtBQUFBLENBQWhCOztBQUVQOzs7Ozs7O0FBT08sU0FBU1QsTUFBVCxDQUFpQlUsR0FBakIsRUFBNkM7QUFBQSxNQUF2QkMsV0FBdUIsdUVBQVQsT0FBUzs7QUFDbEQsTUFBTUMsV0FBVyxDQUNmLEVBQUVDLFNBQVNDLGlCQUFpQkgsV0FBakIsQ0FBWCxFQURlLEVBRWYsRUFBRUUsU0FBUyxPQUFYLEVBRmUsRUFHZixFQUFFQSxTQUFTLGFBQVgsRUFIZSxDQUFqQjs7QUFEa0Q7QUFBQTtBQUFBOztBQUFBO0FBT2xELHlCQUEwQkQsUUFBMUIsOEhBQW9DO0FBQUEsVUFBdkJDLE9BQXVCLGVBQXZCQSxPQUF1Qjs7QUFDbEMsVUFBSTtBQUFFLGVBQU9WLFFBQVFPLEdBQVIsRUFBYUcsT0FBYixFQUFzQkUsUUFBdEIsQ0FBK0IsT0FBL0IsQ0FBUDtBQUFnRCxPQUF0RCxDQUF1RCxPQUFPQyxDQUFQLEVBQVUsQ0FBRztBQUNyRTs7QUFFRDtBQVhrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVlsRCxTQUFPLFFBQVA7QUFDRDs7QUFFRDs7Ozs7OztBQU9PLElBQU1iLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ2MsSUFBRCxFQUFPTixXQUFQO0FBQUEsU0FBdUJULG1CQUFTQyxPQUFULENBQWlCYyxJQUFqQixFQUF1QixPQUF2QixFQUFnQ04sV0FBaEMsQ0FBdkI7QUFBQSxDQUFoQjs7QUFFUCxTQUFTRyxnQkFBVCxHQUE4QztBQUFBLE1BQW5CRCxPQUFtQix1RUFBVCxPQUFTOztBQUM1QyxNQUFJSyxjQUFKOztBQUVBLE1BQUtBLFFBQVFMLFFBQVFLLEtBQVIsQ0FBYyxrQkFBZCxDQUFiLEVBQWlEO0FBQy9DLFdBQU8sU0FBU0EsTUFBTSxDQUFOLENBQWhCO0FBQ0Q7O0FBRUQsTUFBS0EsUUFBUUwsUUFBUUssS0FBUixDQUFjLGtCQUFkLENBQWIsRUFBaUQ7QUFDL0MsV0FBTyxhQUFhQSxNQUFNLENBQU4sQ0FBcEI7QUFDRDs7QUFFRCxNQUFLQSxRQUFRTCxRQUFRSyxLQUFSLENBQWMsb0JBQWQsQ0FBYixFQUFtRDtBQUNqRCxXQUFPLGNBQWNBLE1BQU0sQ0FBTixDQUFyQjtBQUNEOztBQUVELFNBQU9MLE9BQVA7QUFDRCIsImZpbGUiOiJjaGFyc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuY29kaW5nIGZyb20gJ2VuY29kaW5nJ1xuXG4vKipcbiAqIEVuY29kZXMgYW4gdW5pY29kZSBzdHJpbmcgaW50byBhbiBVaW50OEFycmF5IG9iamVjdCBhcyBVVEYtOFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgU3RyaW5nIHRvIGJlIGVuY29kZWRcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IFVURi04IGVuY29kZWQgdHlwZWQgYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZSA9IHN0ciA9PiBlbmNvZGluZy5jb252ZXJ0KHN0ciwgJ1VURi04JylcblxuZXhwb3J0IGNvbnN0IGFycjJzdHIgPSBhcnIgPT4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBhcnIpXG5cbi8qKlxuICogRGVjb2RlcyBhIHN0cmluZyBmcm9tIFVpbnQ4QXJyYXkgdG8gYW4gdW5pY29kZSBzdHJpbmcgdXNpbmcgc3BlY2lmaWVkIGVuY29kaW5nXG4gKlxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWYgQmluYXJ5IGRhdGEgdG8gYmUgZGVjb2RlZFxuICogQHBhcmFtIHtTdHJpbmd9IEJpbmFyeSBkYXRhIGlzIGRlY29kZWQgaW50byBzdHJpbmcgdXNpbmcgdGhpcyBjaGFyc2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IERlY29kZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUgKGJ1ZiwgZnJvbUNoYXJzZXQgPSAndXRmLTgnKSB7XG4gIGNvbnN0IGNoYXJzZXRzID0gW1xuICAgIHsgY2hhcnNldDogbm9ybWFsaXplQ2hhcnNldChmcm9tQ2hhcnNldCkgfSxcbiAgICB7IGNoYXJzZXQ6ICd1dGYtOCcgfSxcbiAgICB7IGNoYXJzZXQ6ICdpc28tODg1OS0xNScgfVxuICBdXG5cbiAgZm9yIChjb25zdCB7IGNoYXJzZXQgfSBvZiBjaGFyc2V0cykge1xuICAgIHRyeSB7IHJldHVybiBjb252ZXJ0KGJ1ZiwgY2hhcnNldCkudG9TdHJpbmcoJ3V0Zi04JykgfSBjYXRjaCAoZSkgeyB9XG4gIH1cblxuICAvLyByZXR1cm4gYXJyMnN0cihidWYpIC8vIGFsbCBlbHNlIGZhaWxzLCB0cmVhdCBpdCBhcyBiaW5hcnlcbiAgcmV0dXJuIFwid2hvb3BzXCJcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIGZyb20gc3BlY2lmaWMgZW5jb2RpbmcgdG8gVVRGLTggVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFVpbnQ4QXJyYXl9IGRhdGEgRGF0YSB0byBiZSBlbmNvZGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gU291cmNlIGVuY29kaW5nIGZvciB0aGUgc3RyaW5nIChvcHRpb25hbCBmb3IgZGF0YSBvZiB0eXBlIFN0cmluZylcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IFVURi04IGVuY29kZWQgdHlwZWQgYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnQgPSAoZGF0YSwgZnJvbUNoYXJzZXQpID0+IGVuY29kaW5nLmNvbnZlcnQoZGF0YSwgJ1VURi04JywgZnJvbUNoYXJzZXQpXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoYXJzZXQgKGNoYXJzZXQgPSAndXRmLTgnKSB7XG4gIGxldCBtYXRjaFxuXG4gIGlmICgobWF0Y2ggPSBjaGFyc2V0Lm1hdGNoKC9edXRmWy1fXT8oXFxkKykkL2kpKSkge1xuICAgIHJldHVybiAnVVRGLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL153aW5bLV9dPyhcXGQrKSQvaSkpKSB7XG4gICAgcmV0dXJuICdXSU5ET1dTLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL15sYXRpblstX10/KFxcZCspJC9pKSkpIHtcbiAgICByZXR1cm4gJ0lTTy04ODU5LScgKyBtYXRjaFsxXVxuICB9XG5cbiAgcmV0dXJuIGNoYXJzZXRcbn1cbiJdfQ==