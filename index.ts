import {getClockAngle} from './test1/test'
import {getQuestionPart} from './test2/test'
import { quickestPath } from './test3/test'
import { minEnergy } from './test4/test'

console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));

let questionParts1 = ["BATHROOM", "BATHSALTS", "BLOODBATH"];
console.log(getQuestionPart(questionParts1));
let questionParts2 = ["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"];
console.log(getQuestionPart(questionParts2));


try {
    const board: { ladders: [number, number][]; snakes: [number, number][]; } = {
        ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
        snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]],
    };

    const rolls = quickestPath(board);
    console.log(rolls); 
} catch (error) {
    console.error("Error:", error); 
}

const start = 0;
const shops = [4, 9];
const stations = [3, 6, 8];
const target = 11;

const minimumEnergy = minEnergy(start, shops, stations, target);

console.log(minimumEnergy);