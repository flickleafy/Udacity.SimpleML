// Simple example of supervised learning used to recognize if a photo is light or dark
const photoLightness = {}

const dataSamples = require("./dataSamples")
const brain = require("brain.js")
const imageLoader = require("./image/imageLoader")
const imageHelper = require("./image/imageHelper")

photoLightness.initialize = async () =>
{
    // Initialize neural network object
    const neuralNetwork = new brain.NeuralNetwork()

    // Train our model based on our data samples
    neuralNetwork.train(dataSamples.colorSamples);

    // Load local image from our resources
    const image = await imageLoader.getImage('./res/eifel.jpg')

    // Get average pixel color of whole image
    const pixelColorRGB = imageHelper.averagePixelColorRGB(image)

    // Convert to the format used in our model
    const pixelColorHSL = imageHelper.pixelColorRGBToHSLfp(pixelColorRGB)

    // Predict if it is dark or light based on the averaged pixel
    const predictionResult = brain.likely(pixelColorHSL, neuralNetwork);
    console.log(predictionResult);
}

module.exports = photoLightness