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

  var charsets = [{ charset: normalizeCharset(fromCharset), fatal: false }, { charset: 'utf-8', fatal: true }, { charset: 'iso-8859-15', fatal: false }];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = charsets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _step.value,
          charset = _step$value.charset,
          fatal = _step$value.fatal;

      try {
        var utf = _encoding2.default.convert(buf, 'utf-8', fromCharset);
        return utf.toString('utf-8');
      } catch (e) {}
    }
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

  return arr2str(buf); // all else fails, treat it as binary
}

/**
 * Convert a string from specific encoding to UTF-8 Uint8Array
 *
 * @param {String|Uint8Array} data Data to be encoded
 * @param {String} Source encoding for the string (optional for data of type String)
 * @return {Uint8Array} UTF-8 encoded typed array
 */
var convert = exports.convert = function convert(data, fromCharset) {
  return typeof data === 'string' ? encode(data) : encode(decode(data, fromCharset));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyc2V0LmpzIl0sIm5hbWVzIjpbImRlY29kZSIsImVuY29kZSIsImVuY29kaW5nIiwiY29udmVydCIsInN0ciIsImFycjJzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsImFyciIsImJ1ZiIsImZyb21DaGFyc2V0IiwiY2hhcnNldHMiLCJjaGFyc2V0Iiwibm9ybWFsaXplQ2hhcnNldCIsImZhdGFsIiwidXRmIiwidG9TdHJpbmciLCJlIiwiZGF0YSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7UUFtQmdCQSxNLEdBQUFBLE07O0FBbkJoQjs7Ozs7O0FBRUE7Ozs7OztBQU1PLElBQU1DLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFPQyxtQkFBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0IsT0FBdEIsQ0FBUDtBQUFBLENBQWY7O0FBRUEsSUFBTUMsNEJBQVUsU0FBVkEsT0FBVTtBQUFBLFNBQU9DLE9BQU9DLFlBQVAsQ0FBb0JDLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDQyxHQUFoQyxDQUFQO0FBQUEsQ0FBaEI7O0FBRVA7Ozs7Ozs7QUFPTyxTQUFTVCxNQUFULENBQWlCVSxHQUFqQixFQUE2QztBQUFBLE1BQXZCQyxXQUF1Qix1RUFBVCxPQUFTOztBQUNsRCxNQUFNQyxXQUFXLENBQ2YsRUFBRUMsU0FBU0MsaUJBQWlCSCxXQUFqQixDQUFYLEVBQTBDSSxPQUFPLEtBQWpELEVBRGUsRUFFZixFQUFFRixTQUFTLE9BQVgsRUFBb0JFLE9BQU8sSUFBM0IsRUFGZSxFQUdmLEVBQUVGLFNBQVMsYUFBWCxFQUEwQkUsT0FBTyxLQUFqQyxFQUhlLENBQWpCOztBQURrRDtBQUFBO0FBQUE7O0FBQUE7QUFPbEQseUJBQWlDSCxRQUFqQyw4SEFBMkM7QUFBQTtBQUFBLFVBQTlCQyxPQUE4QixlQUE5QkEsT0FBOEI7QUFBQSxVQUFyQkUsS0FBcUIsZUFBckJBLEtBQXFCOztBQUN6QyxVQUFJO0FBQ0YsWUFBTUMsTUFBTWQsbUJBQVNDLE9BQVQsQ0FBaUJPLEdBQWpCLEVBQXNCLE9BQXRCLEVBQStCQyxXQUEvQixDQUFaO0FBQ0EsZUFBT0ssSUFBSUMsUUFBSixDQUFhLE9BQWIsQ0FBUDtBQUNELE9BSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVUsQ0FBRztBQUNoQjtBQVppRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNsRCxTQUFPYixRQUFRSyxHQUFSLENBQVAsQ0Fka0QsQ0FjOUI7QUFDckI7O0FBRUQ7Ozs7Ozs7QUFPTyxJQUFNUCw0QkFBVSxTQUFWQSxPQUFVLENBQUNnQixJQUFELEVBQU9SLFdBQVA7QUFBQSxTQUF1QixPQUFPUSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCbEIsT0FBT2tCLElBQVAsQ0FBM0IsR0FBMENsQixPQUFPRCxPQUFPbUIsSUFBUCxFQUFhUixXQUFiLENBQVAsQ0FBakU7QUFBQSxDQUFoQjs7QUFFUCxTQUFTRyxnQkFBVCxHQUE4QztBQUFBLE1BQW5CRCxPQUFtQix1RUFBVCxPQUFTOztBQUM1QyxNQUFJTyxjQUFKOztBQUVBLE1BQUtBLFFBQVFQLFFBQVFPLEtBQVIsQ0FBYyxrQkFBZCxDQUFiLEVBQWlEO0FBQy9DLFdBQU8sU0FBU0EsTUFBTSxDQUFOLENBQWhCO0FBQ0Q7O0FBRUQsTUFBS0EsUUFBUVAsUUFBUU8sS0FBUixDQUFjLGtCQUFkLENBQWIsRUFBaUQ7QUFDL0MsV0FBTyxhQUFhQSxNQUFNLENBQU4sQ0FBcEI7QUFDRDs7QUFFRCxNQUFLQSxRQUFRUCxRQUFRTyxLQUFSLENBQWMsb0JBQWQsQ0FBYixFQUFtRDtBQUNqRCxXQUFPLGNBQWNBLE1BQU0sQ0FBTixDQUFyQjtBQUNEOztBQUVELFNBQU9QLE9BQVA7QUFDRCIsImZpbGUiOiJjaGFyc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuY29kaW5nIGZyb20gXCJlbmNvZGluZ1wiXG5cbi8qKlxuICogRW5jb2RlcyBhbiB1bmljb2RlIHN0cmluZyBpbnRvIGFuIFVpbnQ4QXJyYXkgb2JqZWN0IGFzIFVURi04XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gYmUgZW5jb2RlZFxuICogQHJldHVybiB7VWludDhBcnJheX0gVVRGLTggZW5jb2RlZCB0eXBlZCBhcnJheVxuICovXG5leHBvcnQgY29uc3QgZW5jb2RlID0gc3RyID0+IGVuY29kaW5nLmNvbnZlcnQoc3RyLCAnVVRGLTgnKVxuXG5leHBvcnQgY29uc3QgYXJyMnN0ciA9IGFyciA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGFycilcblxuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIGZyb20gVWludDhBcnJheSB0byBhbiB1bmljb2RlIHN0cmluZyB1c2luZyBzcGVjaWZpZWQgZW5jb2RpbmdcbiAqXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZiBCaW5hcnkgZGF0YSB0byBiZSBkZWNvZGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gQmluYXJ5IGRhdGEgaXMgZGVjb2RlZCBpbnRvIHN0cmluZyB1c2luZyB0aGlzIGNoYXJzZXRcbiAqIEByZXR1cm4ge1N0cmluZ30gRGVjb2RlZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZSAoYnVmLCBmcm9tQ2hhcnNldCA9ICd1dGYtOCcpIHtcbiAgY29uc3QgY2hhcnNldHMgPSBbXG4gICAgeyBjaGFyc2V0OiBub3JtYWxpemVDaGFyc2V0KGZyb21DaGFyc2V0KSwgZmF0YWw6IGZhbHNlIH0sXG4gICAgeyBjaGFyc2V0OiAndXRmLTgnLCBmYXRhbDogdHJ1ZSB9LFxuICAgIHsgY2hhcnNldDogJ2lzby04ODU5LTE1JywgZmF0YWw6IGZhbHNlIH1cbiAgXVxuXG4gIGZvciAoY29uc3QgeyBjaGFyc2V0LCBmYXRhbCB9IG9mIGNoYXJzZXRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHV0ZiA9IGVuY29kaW5nLmNvbnZlcnQoYnVmLCAndXRmLTgnLCBmcm9tQ2hhcnNldClcbiAgICAgIHJldHVybiB1dGYudG9TdHJpbmcoJ3V0Zi04JylcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfVxuXG4gIHJldHVybiBhcnIyc3RyKGJ1ZikgLy8gYWxsIGVsc2UgZmFpbHMsIHRyZWF0IGl0IGFzIGJpbmFyeVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgZnJvbSBzcGVjaWZpYyBlbmNvZGluZyB0byBVVEYtOCBVaW50OEFycmF5XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8VWludDhBcnJheX0gZGF0YSBEYXRhIHRvIGJlIGVuY29kZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBTb3VyY2UgZW5jb2RpbmcgZm9yIHRoZSBzdHJpbmcgKG9wdGlvbmFsIGZvciBkYXRhIG9mIHR5cGUgU3RyaW5nKVxuICogQHJldHVybiB7VWludDhBcnJheX0gVVRGLTggZW5jb2RlZCB0eXBlZCBhcnJheVxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9IChkYXRhLCBmcm9tQ2hhcnNldCkgPT4gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gZW5jb2RlKGRhdGEpIDogZW5jb2RlKGRlY29kZShkYXRhLCBmcm9tQ2hhcnNldCkpXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoYXJzZXQgKGNoYXJzZXQgPSAndXRmLTgnKSB7XG4gIGxldCBtYXRjaFxuXG4gIGlmICgobWF0Y2ggPSBjaGFyc2V0Lm1hdGNoKC9edXRmWy1fXT8oXFxkKykkL2kpKSkge1xuICAgIHJldHVybiAnVVRGLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL153aW5bLV9dPyhcXGQrKSQvaSkpKSB7XG4gICAgcmV0dXJuICdXSU5ET1dTLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL15sYXRpblstX10/KFxcZCspJC9pKSkpIHtcbiAgICByZXR1cm4gJ0lTTy04ODU5LScgKyBtYXRjaFsxXVxuICB9XG5cbiAgcmV0dXJuIGNoYXJzZXRcbn1cbiJdfQ==