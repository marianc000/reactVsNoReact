export const results = {};

function addResult(label, start, domDone, rendered) {
    results[label] = results[label] ?? [];
    results[label].push({ start, domDone, rendered });
}


export function execute(label, render) {
    return new Promise(resolve => {
        try {
            gc(); // will not work without flags
        } catch (error) {
            console.error(error);
        }

        requestAnimationFrame(() => {
            const domLabel = label + "_INSERT";
            console.time(label);
            console.time(domLabel);
            const start = Date.now();
            render();
            const domDone = Date.now();
            console.timeEnd(domLabel);
            setTimeout(() => {
                console.timeEnd(label);
                addResult(label, start, domDone, Date.now());
                setTimeout(resolve,100);
            });
        });
    });
}