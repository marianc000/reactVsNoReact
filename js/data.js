// data.js
const COL_COUNT = 20, ROW_COUNT = 500;
 
function generateData() {
    const rows = [];
    for (let r = 0; r < ROW_COUNT; r++) {
        const row = [];
        rows.push(row);
        for (let c = 0; c < COL_COUNT; c++)
            row.push(`${c},${r}`);
    }
    return rows;
}

function modifyOneCell(data) {
    const rows = data.slice();
    const modifiedRow = rows[20].slice();
    modifiedRow[10] = 'TEST';
    rows[20] = modifiedRow;
    return rows;
}

export const data = generateData();
export const data2 = modifyOneCell(data);
 
  