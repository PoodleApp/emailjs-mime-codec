import encoding from 'encoding'

/**
 * Encodes an unicode string into an Uint8Array object as UTF-8
 *
 * @param {String} str String to be encoded
 * @return {Uint8Array} UTF-8 encoded typed array
 */
export const encode = str => encoding.convert(str, 'UTF-8')

export const arr2str = arr => String.fromCharCode.apply(null, arr)

/**
 * Decodes a string from Uint8Array to an unicode string using specified encoding
 *
 * @param {Uint8Array} buf Binary data to be decoded
 * @param {String} Binary data is decoded into string using this charset
 * @return {String} Decoded string
 */
export function decode (buf, fromCharset = 'utf-8') {
  const charsets = [
    { charset: normalizeCharset(fromCharset) },
    { charset: 'utf-8' },
    { charset: 'iso-8859-15' }
  ]

  for (const { charset } of charsets) {
    try {
      return Buffer.from(convert(buf, charset)).toString('utf-8')
    } catch (e) { }
  }

  return arr2str(buf) // all else fails, treat it as binary
}

/**
 * Convert a string from specific encoding to UTF-8 Uint8Array
 *
 * @param {String|Uint8Array} data Data to be encoded
 * @param {String} Source encoding for the string (optional for data of type String)
 * @return {Uint8Array} UTF-8 encoded typed array
 */
export const convert = (data, fromCharset) => encoding.convert(data, 'UTF-8', fromCharset)

function normalizeCharset (charset = 'utf-8') {
  let match

  if ((match = charset.match(/^utf[-_]?(\d+)$/i))) {
    return 'UTF-' + match[1]
  }

  if ((match = charset.match(/^win[-_]?(\d+)$/i))) {
    return 'WINDOWS-' + match[1]
  }

  if ((match = charset.match(/^latin[-_]?(\d+)$/i))) {
    return 'ISO-8859-' + match[1]
  }

  return charset
}
