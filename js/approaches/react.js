function Row({
    row
}) {
    return React.createElement("div", {
        className: "row"
    }, row.map((text,i) => React.createElement("div", {
        key: i,
        title: text
    }, text)));
}

function Table({
    rows
}) {
    return rows.map((row,i) => React.createElement(Row, {
        key: i,
        row: row
    }));
}

export function render(data) {
    ReactDOM.render(React.createElement(Table, {
        rows: data
    }), root);
}

export function clear() {
    ReactDOM.render(null, root);
}