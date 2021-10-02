function Row({
    row
}) {
    return React.createElement("div", {
        className: "row"
    }, row.map(text => React.createElement("div", {
        key: text,
        title: text
    }, text)));
}

function Table({
    rows
}) {
    return rows.map(row => React.createElement(Row, {
        key: row.toString(),
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