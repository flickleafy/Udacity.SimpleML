const pixelLightness = require('./ml/supervisedLearning')
const testData = require('../res/testData/testColorSamples')

const pixelColorHSL = testData.testColorSample

pixelLightness.initialize()

const prediction = pixelLightness.predict(pixelColorHSL)

console.log("The prediction of the pixel is: ", prediction);