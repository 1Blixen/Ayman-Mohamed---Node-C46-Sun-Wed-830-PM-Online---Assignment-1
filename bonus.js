const createCounter = (init) => {
    let count = init;

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = init
    };
};