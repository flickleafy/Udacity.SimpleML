// Simple example of deep learning, image classification

const deepLearning = {}

const mobilenet = require('@tensorflow-models/mobilenet');

const imageLoader = require("./image/imageLoader")
const tensorHelper = require("./image/tensorHelper")

deepLearning.initialize = async () =>
{
    // Load our image
    const image = await imageLoader.getImage('./res/eifel.jpg')

    // Convert image to a tensor
    const tensor3d = tensorHelper.imageTo3dTensor

    // Classify our tensor
    await classify(tensor3d)
}

async function classify(tensor)
{
    // Load a model from MobileNet
    const model = await mobilenet.load();

    // Classify our tensor
    const predictions = await model.classify(tensor);

    console.log('Predictions: ');

    for (let index = 0; index < predictions.length; index++)
    {
        const prediction = predictions[index];
        console.log("class: ", prediction.className, "\t\t\t\tprobability: ", prediction.probability)
    }
}

module.exports = deepLearning

