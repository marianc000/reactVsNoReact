function Row({ row }) {
    return <div className="row">
        {row.map(text => <div key={text} title={text} >{text}</div>)}
    </div>
}

function Table({ rows }) {
    return rows.map(row => <Row key={row.toString()} row={row} />);
}

function reactTable(data) {
    ReactDOM.render(<Table rows={data} />, root);
}

function reactEmpty() {
    ReactDOM.render(null, root);
}