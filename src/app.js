const brain = require("brain.js")
const data =
    [
        { input: { h: 0.602, s: 0.52, l: 0.75 }, output: { light: 1 } }, // hsl(217, 52%, 75%)
        { input: { h: 0.472, s: 0.77, l: 0.48 }, output: { light: 1 } }, // hsl(170, 77%, 48%)        
        { input: { h: 0.608, s: 0.31, l: 0.80 }, output: { light: 1 } }, // hsl(219, 31%, 80%)
        { input: { h: 0.905, s: 0.16, l: 0.29 }, output: { dark: 1 } }, // hsl(326, 16%, 29%)
        { input: { h: 0.416, s: 0.25, l: 0.30 }, output: { dark: 1 } }, // hsl(150, 25%, 30%)
        { input: { h: 0.041, s: 0.40, l: 0.35 }, output: { dark: 1 } }, // hsl(15, 40%, 35%)
    ]

const network = new brain.NeuralNetwork()

network.train(data);

const result = brain.likely({ h: 0.441, s: 0.6, l: 0.40 }, network); // hsl(159, 60%, 40%)
console.log(result);
