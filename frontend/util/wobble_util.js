import randomNumber from './random_number_util';

let frame;

const wobble = () => {
    const logo = document.getElementById('logo');

    logo.addEventListener('mouseover', (e) => {
        frame = window.requestAnimationFrame(toggleWobble);
    });

    logo.addEventListener('mouseout', (e) => {
        deToggleWobble();
    });
}

let time = null;
let rand = randomNumber(50, 150);

const toggleWobble = (timestamp) => {
    if (!time) time = timestamp;
    let progress = timestamp - time;

    const logo = document.getElementById('logo');
    const children = Array.from(logo.children[0].children);

    if (progress > rand) {
        rand = randomNumber(50, 150);
        time = 0;
        timestamp = 0;

        children.forEach(child => {
            const newPos = randomNumber(-30, 30);
            const dX = randomNumber(-2, 2);
            const dY = randomNumber(-4, 4);
            child.setAttribute('style', `transform: rotate(${newPos}deg) translate(${dX}px, ${dY}px);`);
        });
    }

    frame = window.requestAnimationFrame(toggleWobble);
}

const deToggleWobble = () => {
    window.cancelAnimationFrame(frame);

    const logo = document.getElementById('logo');
    const children = Array.from(logo.children[0].children);

    children.forEach(child => {
        child.setAttribute('style', 'transform: rotate(0deg)');
    });
}

export default wobble;