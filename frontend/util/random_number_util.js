const randomNumber = (min, max) => {
    const range = max - min;
    return Math.floor(Math.random() * (range + 1)) + min;
}

export default randomNumber;