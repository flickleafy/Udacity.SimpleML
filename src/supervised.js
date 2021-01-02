// Simple example of supervised learning used to recognize if a photo is light or dark
const photoLightness = {}

const dataSamples = require("./dataSamples")
const brain = require("brain.js")
const imageLoader = require("./image/imageLoader")
const imageHelper = require("./image/imageHelper")

photoLightness.initialize = async () =>
{
    const neuralNetwork = new brain.NeuralNetwork()

    neuralNetwork.train(dataSamples.colorSamples);

    const image = await imageLoader.getImage('./res/eifel.jpg')

    const pixelColor = imageHelper.averagePixelColorRGB(image)

    const hslColor = imageHelper.pixelColorRGBToHSLfp(pixelColor)
    const predictionResult = brain.likely(hslColor, neuralNetwork);
    console.log(predictionResult);
}

module.exports = photoLightness