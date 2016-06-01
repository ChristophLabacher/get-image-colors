const fs = require('fs')
const path = require('path')
const tmp = require('tmp')
const getPixels = require('get-pixels')
const getRgbaPalette = require('get-rgba-palette')
const chroma = require('chroma-js')

module.exports = function colorPalette (buffer, type, count, callback) {
  getPixels(buffer, type, function (err, pixels) {
    if (err) return callback(err)
    const palette = getRgbaPalette(pixels.data, count).map(function (rgba) {
      return chroma(rgba)
    })

    return callback(null, palette)
  })
}
