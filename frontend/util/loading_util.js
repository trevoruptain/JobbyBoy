let start = 0;
let rotation = 0;

const rotate = (timestamp, div) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    rotation = (rotation + (progress / 2)) % 360;
    start = timestamp;
    div.setAttribute('style', `transform: rotate(${rotation}deg)`);
    window.requestAnimationFrame((time) => rotate(time, div));
}

export default rotate;