import { results } from './shared.js';

function tr(val) {
    return `<tr>${val}</tr>`;
}

function th(val) {
    return `<th>${val}</th>`;
}
function td(val) {
    return `<td>${val}</td>`;
}

function table(caption, val) {
    return `<table><caption>${caption}</caption>${val}</table>`;
}

function separate() {
    const dom = {}, paint = {};
    console.log(results);
    console.log(JSON.stringify(results)); 
    Object.entries(results).forEach(([k, vals]) => {
        dom[k] = vals.map(({ start, domDone }) => domDone - start);
        paint[k] = vals.map(({ domDone, rendered }) => rendered - domDone);
    });

    return { dom, paint };
}

function addAverage(data) {
    Object.values(data).forEach(vals => vals.push(average(vals)));
}

function average(array) {
    return Math.round(array.reduce((total, val) => total + val, 0) / array.length);
}

function flatten(data) {
    return Object.entries(data).map(e => e.flat());
}

function displayTable(data, caption) {
    addAverage(data);
    data=flatten(data);
    console.log(data);
    const headers = tr(th('Method') + data[0].slice(1, -1).map((v, i) => th(i)).join('') + th('Average'));
    const rows = data.map(row => tr(row.map(cell => td(cell)).join(''))).join('');
    root.insertAdjacentHTML('beforeend', table(caption, headers + rows));
}

export default function showResults() {
    const { dom, paint } = separate();
    displayTable(dom, 'Changing DOM, ms');
    displayTable(paint, 'Painting, ms');
}



