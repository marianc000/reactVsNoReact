import  run from './benchmarking.js';

import { render as react, clear as rclear } from './approaches/react.js';
import { render as noreact, clear } from './approaches/noreact.js';
import * as datas from './data.js';

const approaches = { noreact, react };

console.log(approaches);
startBtn.onclick = () => {
    controls.remove();
    run();
}

const buttons = document.querySelectorAll('button[data-approach]');
buttons.forEach(btn => btn.onclick = onClick);

let previousApproach;

function onClick() {
    const params = this.dataset;
    buttons.forEach(btn => btn.className = (btn === this ? 'selected' : ''));
    if (previousApproach && previousApproach === 'react')
        rclear();
    else
        clear();
    approaches[params.approach](datas[params.data]);
    previousApproach = params.approach;
}
