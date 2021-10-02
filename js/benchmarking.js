// benchmarking.js
import { render as rrender, clear as rclear } from './approaches/react.js';
import { render, clear } from './approaches/noreact.js';
import { data, data2 } from './data.js';

import showResults from './results.js';
import { execute } from './shared.js';


function promise(func) {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            func();
            setTimeout(resolve);
        });
    });
}

const noreact = () => render(data);
const noreact2 = () => render(data2);
const empty = () => promise(clear);

const react = () => rrender(data);
const react2 = () => rrender(data2);
const rempty = () => promise(rclear);

export default function run() {
    const times = 3;
    let p = Promise.resolve().then(clear);

    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('noreact', noreact))
            .then(empty);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('react', react))
            .then(rempty);
    }

    // without clearing
    p = p.then(() => promise(noreact));

    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('noreact noclear', noreact))
    }

    p = p.then(empty).then(() => promise(react));

    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('react noclear', react))
    }
    //
    p = p.then(rempty).then(() => promise(noreact2));

    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('noreact cell', noreact))
            .then(() => execute('noreact cell2', noreact2))
    }

    p = p.then(empty).then(() => promise(react2));

    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('react cell', react))
            .then(() => execute('react cell2', react2))
    }

    p = p.then(rempty);

    p.then(showResults);
}


