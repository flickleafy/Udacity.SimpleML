const pixelLightness = require("./ml/supervisedLearning")

const pixelColorHSL = { h: 0.277, s: 0.25, l: 0.20 } // hsl(100, 25%, 20%)

pixelLightness.initialize()

const prediction = pixelLightness.predict(pixelColorHSL)

console.log("The prediction of the pixel is: ", prediction);