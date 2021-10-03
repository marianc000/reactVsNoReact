// noreact.js
function row(vals) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';

    rowDiv.append(...vals.map(val => {
        const cell = document.createElement("div");
        cell.title = val;
        cell.append(val);
        return cell;
    }));
    return rowDiv;
}

function table(data) {
    return data.map(vals => row(vals));
}

export function render(data) {
    root.replaceChildren(...table(data));
}

export function clear(data) {
    root.replaceChildren();
}