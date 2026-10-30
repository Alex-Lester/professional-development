function blockFor(ms) {
    const start = Date.now();
    console.log(`sync start: ${Date.now() - start}`);

    setTimeout(() => {
        console.log(`300ms timer: ${Date.now() - start}`)
    }, 300);

    setTimeout(() => {
        console.log(`0ms timer: ${Date.now() - start}`)
    }, 0);

    setTimeout(() => {
        console.log(`100ms timer: ${Date.now() - start}`)
    }, 100);

    while (Date.now() - start < ms) {
        // doing nothing
    }

    console.log(`sync end: ${Date.now() - start}`);
}

blockFor(500);