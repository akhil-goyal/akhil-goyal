const fs = require('fs');
const { makeBadge } = require('badge-maker');

const createBadge = () => {

    const format = {
        label: 'Medium 👏',
        message: `22K`,
        style: 'flat-square',
        color: 'informational'
    }

    const svg = makeBadge(format);

    fs.writeFile(`./assets/medium.svg`, svg, (err) => {
        if (err) throw err; console.log('SVG created successfully!');
    });

}

createBadge();