export const results = {};

function addResult(label, start,   rendered) {
    results[label] = results[label] ?? [];
    results[label].push({ start,   rendered });
}


export function execute(label, render) {
    return new Promise(resolve => {
        try {
            gc(); // will not work without flags
        } catch (error) {
            console.error(error);
        }

        requestAnimationFrame(() => {
            console.time(label);
            const start = Date.now();
            render();
            setTimeout(() => {
                console.timeEnd(label);
                addResult(label, start, Date.now());
                setTimeout(resolve, 100);
            });
        });
    });
}