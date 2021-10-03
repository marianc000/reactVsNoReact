function Row({ row }) {
    return <div className="row">
        {row.map((text, i) => <div key={i} title={text}>{text}</div>)}
    </div>
}

function Table({ rows }) {
    return rows.map((row, i) => <Row key={i} row={row}/>);
}

function render(data) {
    ReactDOM.render(<Table rows={data} />, root);
}

function reactEmpty() {
    ReactDOM.render(null, root);
}