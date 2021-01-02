// Simple example of deep learning, image classification

const deepLearning = {}

const mobilenet = require('@tensorflow-models/mobilenet');

const imageLoader = require("./image/imageLoader")
const tensorHelper = require("./image/tensorHelper")

deepLearning.initialize = async () =>
{
    const image = await imageLoader.getImage('./res/eifel.jpg')

    const tensor3d = tensorHelper.imageTo3dTensor

    await classify(tensor3d)
}

async function classify(image)
{
    // Load the model.
    const model = await mobilenet.load();

    // Classify the image.
    const predictions = await model.classify(image);

    console.log('Predictions: ');

    for (let index = 0; index < predictions.length; index++)
    {
        const prediction = predictions[index];
        console.log("class: ", prediction.className, "\t\t\t\tprobability: ", prediction.probability)
    }
}

module.exports = deepLearning

