setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hRotate = 30 * h + m / 2;
    mRotate = 6 * m;
    sRotate = 6 * s;

    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;

}, 1000);