'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = exports.arr2str = exports.encode = undefined;
exports.decode = decode;

require('text-encoding');

/**
 * Encodes an unicode string into an Uint8Array object as UTF-8
 *
 * @param {String} str String to be encoded
 * @return {Uint8Array} UTF-8 encoded typed array
 */
var encode = exports.encode = function encode(str) {
  return new TextEncoder('UTF-8').encode(str);
}; // Polyfill TextDecoder and TextEncoder if they are not present.
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
        return new TextDecoder(charset, { fatal: fatal }).decode(buf);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyc2V0LmpzIl0sIm5hbWVzIjpbImRlY29kZSIsImVuY29kZSIsIlRleHRFbmNvZGVyIiwic3RyIiwiYXJyMnN0ciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiYXJyIiwiYnVmIiwiZnJvbUNoYXJzZXQiLCJjaGFyc2V0cyIsImNoYXJzZXQiLCJub3JtYWxpemVDaGFyc2V0IiwiZmF0YWwiLCJUZXh0RGVjb2RlciIsImUiLCJjb252ZXJ0IiwiZGF0YSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7UUFvQmdCQSxNLEdBQUFBLE07O0FBbkJoQjs7QUFFQTs7Ozs7O0FBTU8sSUFBTUMsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFNBQU8sSUFBSUMsV0FBSixDQUFnQixPQUFoQixFQUF5QkQsTUFBekIsQ0FBZ0NFLEdBQWhDLENBQVA7QUFBQSxDQUFmLEMsQ0FUUDtBQVdPLElBQU1DLDRCQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUFPQyxPQUFPQyxZQUFQLENBQW9CQyxLQUFwQixDQUEwQixJQUExQixFQUFnQ0MsR0FBaEMsQ0FBUDtBQUFBLENBQWhCOztBQUVQOzs7Ozs7O0FBT08sU0FBU1IsTUFBVCxDQUFpQlMsR0FBakIsRUFBNkM7QUFBQSxNQUF2QkMsV0FBdUIsdUVBQVQsT0FBUzs7QUFDbEQsTUFBTUMsV0FBVyxDQUNmLEVBQUVDLFNBQVNDLGlCQUFpQkgsV0FBakIsQ0FBWCxFQUEwQ0ksT0FBTyxLQUFqRCxFQURlLEVBRWYsRUFBRUYsU0FBUyxPQUFYLEVBQW9CRSxPQUFPLElBQTNCLEVBRmUsRUFHZixFQUFFRixTQUFTLGFBQVgsRUFBMEJFLE9BQU8sS0FBakMsRUFIZSxDQUFqQjs7QUFEa0Q7QUFBQTtBQUFBOztBQUFBO0FBT2xELHlCQUFpQ0gsUUFBakMsOEhBQTJDO0FBQUE7QUFBQSxVQUE5QkMsT0FBOEIsZUFBOUJBLE9BQThCO0FBQUEsVUFBckJFLEtBQXFCLGVBQXJCQSxLQUFxQjs7QUFDekMsVUFBSTtBQUFFLGVBQU8sSUFBSUMsV0FBSixDQUFnQkgsT0FBaEIsRUFBeUIsRUFBRUUsWUFBRixFQUF6QixFQUFvQ2QsTUFBcEMsQ0FBMkNTLEdBQTNDLENBQVA7QUFBd0QsT0FBOUQsQ0FBK0QsT0FBT08sQ0FBUCxFQUFVLENBQUc7QUFDN0U7QUFUaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXbEQsU0FBT1osUUFBUUssR0FBUixDQUFQLENBWGtELENBVzlCO0FBQ3JCOztBQUVEOzs7Ozs7O0FBT08sSUFBTVEsNEJBQVUsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQU9SLFdBQVA7QUFBQSxTQUF1QixPQUFPUSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCakIsT0FBT2lCLElBQVAsQ0FBM0IsR0FBMENqQixPQUFPRCxPQUFPa0IsSUFBUCxFQUFhUixXQUFiLENBQVAsQ0FBakU7QUFBQSxDQUFoQjs7QUFFUCxTQUFTRyxnQkFBVCxHQUE4QztBQUFBLE1BQW5CRCxPQUFtQix1RUFBVCxPQUFTOztBQUM1QyxNQUFJTyxjQUFKOztBQUVBLE1BQUtBLFFBQVFQLFFBQVFPLEtBQVIsQ0FBYyxrQkFBZCxDQUFiLEVBQWlEO0FBQy9DLFdBQU8sU0FBU0EsTUFBTSxDQUFOLENBQWhCO0FBQ0Q7O0FBRUQsTUFBS0EsUUFBUVAsUUFBUU8sS0FBUixDQUFjLGtCQUFkLENBQWIsRUFBaUQ7QUFDL0MsV0FBTyxhQUFhQSxNQUFNLENBQU4sQ0FBcEI7QUFDRDs7QUFFRCxNQUFLQSxRQUFRUCxRQUFRTyxLQUFSLENBQWMsb0JBQWQsQ0FBYixFQUFtRDtBQUNqRCxXQUFPLGNBQWNBLE1BQU0sQ0FBTixDQUFyQjtBQUNEOztBQUVELFNBQU9QLE9BQVA7QUFDRCIsImZpbGUiOiJjaGFyc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9seWZpbGwgVGV4dERlY29kZXIgYW5kIFRleHRFbmNvZGVyIGlmIHRoZXkgYXJlIG5vdCBwcmVzZW50LlxuaW1wb3J0ICd0ZXh0LWVuY29kaW5nJ1xuXG4vKipcbiAqIEVuY29kZXMgYW4gdW5pY29kZSBzdHJpbmcgaW50byBhbiBVaW50OEFycmF5IG9iamVjdCBhcyBVVEYtOFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgU3RyaW5nIHRvIGJlIGVuY29kZWRcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IFVURi04IGVuY29kZWQgdHlwZWQgYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZSA9IHN0ciA9PiBuZXcgVGV4dEVuY29kZXIoJ1VURi04JykuZW5jb2RlKHN0cilcblxuZXhwb3J0IGNvbnN0IGFycjJzdHIgPSBhcnIgPT4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBhcnIpXG5cbi8qKlxuICogRGVjb2RlcyBhIHN0cmluZyBmcm9tIFVpbnQ4QXJyYXkgdG8gYW4gdW5pY29kZSBzdHJpbmcgdXNpbmcgc3BlY2lmaWVkIGVuY29kaW5nXG4gKlxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWYgQmluYXJ5IGRhdGEgdG8gYmUgZGVjb2RlZFxuICogQHBhcmFtIHtTdHJpbmd9IEJpbmFyeSBkYXRhIGlzIGRlY29kZWQgaW50byBzdHJpbmcgdXNpbmcgdGhpcyBjaGFyc2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IERlY29kZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUgKGJ1ZiwgZnJvbUNoYXJzZXQgPSAndXRmLTgnKSB7XG4gIGNvbnN0IGNoYXJzZXRzID0gW1xuICAgIHsgY2hhcnNldDogbm9ybWFsaXplQ2hhcnNldChmcm9tQ2hhcnNldCksIGZhdGFsOiBmYWxzZSB9LFxuICAgIHsgY2hhcnNldDogJ3V0Zi04JywgZmF0YWw6IHRydWUgfSxcbiAgICB7IGNoYXJzZXQ6ICdpc28tODg1OS0xNScsIGZhdGFsOiBmYWxzZSB9XG4gIF1cblxuICBmb3IgKGNvbnN0IHsgY2hhcnNldCwgZmF0YWwgfSBvZiBjaGFyc2V0cykge1xuICAgIHRyeSB7IHJldHVybiBuZXcgVGV4dERlY29kZXIoY2hhcnNldCwgeyBmYXRhbCB9KS5kZWNvZGUoYnVmKSB9IGNhdGNoIChlKSB7IH1cbiAgfVxuXG4gIHJldHVybiBhcnIyc3RyKGJ1ZikgLy8gYWxsIGVsc2UgZmFpbHMsIHRyZWF0IGl0IGFzIGJpbmFyeVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgZnJvbSBzcGVjaWZpYyBlbmNvZGluZyB0byBVVEYtOCBVaW50OEFycmF5XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8VWludDhBcnJheX0gZGF0YSBEYXRhIHRvIGJlIGVuY29kZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBTb3VyY2UgZW5jb2RpbmcgZm9yIHRoZSBzdHJpbmcgKG9wdGlvbmFsIGZvciBkYXRhIG9mIHR5cGUgU3RyaW5nKVxuICogQHJldHVybiB7VWludDhBcnJheX0gVVRGLTggZW5jb2RlZCB0eXBlZCBhcnJheVxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9IChkYXRhLCBmcm9tQ2hhcnNldCkgPT4gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gZW5jb2RlKGRhdGEpIDogZW5jb2RlKGRlY29kZShkYXRhLCBmcm9tQ2hhcnNldCkpXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoYXJzZXQgKGNoYXJzZXQgPSAndXRmLTgnKSB7XG4gIGxldCBtYXRjaFxuXG4gIGlmICgobWF0Y2ggPSBjaGFyc2V0Lm1hdGNoKC9edXRmWy1fXT8oXFxkKykkL2kpKSkge1xuICAgIHJldHVybiAnVVRGLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL153aW5bLV9dPyhcXGQrKSQvaSkpKSB7XG4gICAgcmV0dXJuICdXSU5ET1dTLScgKyBtYXRjaFsxXVxuICB9XG5cbiAgaWYgKChtYXRjaCA9IGNoYXJzZXQubWF0Y2goL15sYXRpblstX10/KFxcZCspJC9pKSkpIHtcbiAgICByZXR1cm4gJ0lTTy04ODU5LScgKyBtYXRjaFsxXVxuICB9XG5cbiAgcmV0dXJuIGNoYXJzZXRcbn1cbiJdfQ==