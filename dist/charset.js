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
        return Buffer.from(convert(buf, charset)).toString('utf-8');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyc2V0LmpzIl0sIm5hbWVzIjpbImRlY29kZSIsImVuY29kZSIsImVuY29kaW5nIiwiY29udmVydCIsInN0ciIsImFycjJzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsImFyciIsImJ1ZiIsImZyb21DaGFyc2V0IiwiY2hhcnNldHMiLCJjaGFyc2V0Iiwibm9ybWFsaXplQ2hhcnNldCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImUiLCJkYXRhIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7OztRQW1CZ0JBLE0sR0FBQUEsTTs7QUFuQmhCOzs7Ozs7QUFFQTs7Ozs7O0FBTU8sSUFBTUMsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQU9DLG1CQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFzQixPQUF0QixDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNQyw0QkFBVSxTQUFWQSxPQUFVO0FBQUEsU0FBT0MsT0FBT0MsWUFBUCxDQUFvQkMsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NDLEdBQWhDLENBQVA7QUFBQSxDQUFoQjs7QUFFUDs7Ozs7OztBQU9PLFNBQVNULE1BQVQsQ0FBaUJVLEdBQWpCLEVBQTZDO0FBQUEsTUFBdkJDLFdBQXVCLHVFQUFULE9BQVM7O0FBQ2xELE1BQU1DLFdBQVcsQ0FDZixFQUFFQyxTQUFTQyxpQkFBaUJILFdBQWpCLENBQVgsRUFEZSxFQUVmLEVBQUVFLFNBQVMsT0FBWCxFQUZlLEVBR2YsRUFBRUEsU0FBUyxhQUFYLEVBSGUsQ0FBakI7O0FBRGtEO0FBQUE7QUFBQTs7QUFBQTtBQU9sRCx5QkFBMEJELFFBQTFCLDhIQUFvQztBQUFBLFVBQXZCQyxPQUF1QixlQUF2QkEsT0FBdUI7O0FBQ2xDLFVBQUk7QUFDRixlQUFPRSxPQUFPQyxJQUFQLENBQVliLFFBQVFPLEdBQVIsRUFBYUcsT0FBYixDQUFaLEVBQW1DSSxRQUFuQyxDQUE0QyxPQUE1QyxDQUFQO0FBQ0QsT0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVSxDQUFHO0FBQ2hCO0FBWGlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYWxELFNBQU9iLFFBQVFLLEdBQVIsQ0FBUCxDQWJrRCxDQWE5QjtBQUNyQjs7QUFFRDs7Ozs7OztBQU9PLElBQU1QLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ2dCLElBQUQsRUFBT1IsV0FBUDtBQUFBLFNBQXVCVCxtQkFBU0MsT0FBVCxDQUFpQmdCLElBQWpCLEVBQXVCLE9BQXZCLEVBQWdDUixXQUFoQyxDQUF2QjtBQUFBLENBQWhCOztBQUVQLFNBQVNHLGdCQUFULEdBQThDO0FBQUEsTUFBbkJELE9BQW1CLHVFQUFULE9BQVM7O0FBQzVDLE1BQUlPLGNBQUo7O0FBRUEsTUFBS0EsUUFBUVAsUUFBUU8sS0FBUixDQUFjLGtCQUFkLENBQWIsRUFBaUQ7QUFDL0MsV0FBTyxTQUFTQSxNQUFNLENBQU4sQ0FBaEI7QUFDRDs7QUFFRCxNQUFLQSxRQUFRUCxRQUFRTyxLQUFSLENBQWMsa0JBQWQsQ0FBYixFQUFpRDtBQUMvQyxXQUFPLGFBQWFBLE1BQU0sQ0FBTixDQUFwQjtBQUNEOztBQUVELE1BQUtBLFFBQVFQLFFBQVFPLEtBQVIsQ0FBYyxvQkFBZCxDQUFiLEVBQW1EO0FBQ2pELFdBQU8sY0FBY0EsTUFBTSxDQUFOLENBQXJCO0FBQ0Q7O0FBRUQsU0FBT1AsT0FBUDtBQUNEIiwiZmlsZSI6ImNoYXJzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW5jb2RpbmcgZnJvbSAnZW5jb2RpbmcnXG5cbi8qKlxuICogRW5jb2RlcyBhbiB1bmljb2RlIHN0cmluZyBpbnRvIGFuIFVpbnQ4QXJyYXkgb2JqZWN0IGFzIFVURi04XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gYmUgZW5jb2RlZFxuICogQHJldHVybiB7VWludDhBcnJheX0gVVRGLTggZW5jb2RlZCB0eXBlZCBhcnJheVxuICovXG5leHBvcnQgY29uc3QgZW5jb2RlID0gc3RyID0+IGVuY29kaW5nLmNvbnZlcnQoc3RyLCAnVVRGLTgnKVxuXG5leHBvcnQgY29uc3QgYXJyMnN0ciA9IGFyciA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGFycilcblxuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIGZyb20gVWludDhBcnJheSB0byBhbiB1bmljb2RlIHN0cmluZyB1c2luZyBzcGVjaWZpZWQgZW5jb2RpbmdcbiAqXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZiBCaW5hcnkgZGF0YSB0byBiZSBkZWNvZGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gQmluYXJ5IGRhdGEgaXMgZGVjb2RlZCBpbnRvIHN0cmluZyB1c2luZyB0aGlzIGNoYXJzZXRcbiAqIEByZXR1cm4ge1N0cmluZ30gRGVjb2RlZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZSAoYnVmLCBmcm9tQ2hhcnNldCA9ICd1dGYtOCcpIHtcbiAgY29uc3QgY2hhcnNldHMgPSBbXG4gICAgeyBjaGFyc2V0OiBub3JtYWxpemVDaGFyc2V0KGZyb21DaGFyc2V0KSB9LFxuICAgIHsgY2hhcnNldDogJ3V0Zi04JyB9LFxuICAgIHsgY2hhcnNldDogJ2lzby04ODU5LTE1JyB9XG4gIF1cblxuICBmb3IgKGNvbnN0IHsgY2hhcnNldCB9IG9mIGNoYXJzZXRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbShjb252ZXJ0KGJ1ZiwgY2hhcnNldCkpLnRvU3RyaW5nKCd1dGYtOCcpXG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cblxuICByZXR1cm4gYXJyMnN0cihidWYpIC8vIGFsbCBlbHNlIGZhaWxzLCB0cmVhdCBpdCBhcyBiaW5hcnlcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIGZyb20gc3BlY2lmaWMgZW5jb2RpbmcgdG8gVVRGLTggVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFVpbnQ4QXJyYXl9IGRhdGEgRGF0YSB0byBiZSBlbmNvZGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gU291cmNlIGVuY29kaW5nIGZvciB0aGUgc3RyaW5nIChvcHRpb25hbCBmb3IgZGF0YSBvZiB0eXBlIFN0cmluZylcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IFVURi04IGVuY29kZWQgdHlwZWQgYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnQgPSAoZGF0YSwgZnJvbUNoYXJzZXQpID0+IGVuY29kaW5nLmNvbnZlcnQoZGF0YSwgJ1VURi04JywgZnJvbUNoYXJzZXQpXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoYXJzZXQgKGNoYXJzZXQgPSAndXRmLTgnKSB7XG4gIGxldCBtYXRjaFxuXG4gIGlmICgobWF0Y2ggPSBjaGFyc2V0Lm1hdGNoKC9edXRmWy1fXT8oXFxkKykkL2kpKSkge1xuICAgIHJldHVybiAnVVRGLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL153aW5bLV9dPyhcXGQrKSQvaSkpKSB7XG4gICAgcmV0dXJuICdXSU5ET1dTLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL15sYXRpblstX10/KFxcZCspJC9pKSkpIHtcbiAgICByZXR1cm4gJ0lTTy04ODU5LScgKyBtYXRjaFsxXVxuICB9XG5cbiAgcmV0dXJuIGNoYXJzZXRcbn1cbiJdfQ==