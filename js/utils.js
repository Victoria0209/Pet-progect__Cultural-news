function getRandomNumber(min, max) {
    if (min >= 0 && max > 0 && max > min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const getRandomArrayElem = (elem) => elem[getRandomNumber(0, elem.length - 1)];

export {
    getRandomNumber,
    getRandomArrayElem
};