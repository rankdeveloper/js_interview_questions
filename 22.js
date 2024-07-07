setTimeout(() => {
    console.log('This will be executed after 1000 milliseconds');
}, 1000)

setImmediate(() => {
    console.log('This will be executed in the next iteration of the event loop');
});


process.nextTick(() => {
    console.log('This will be executed in the next event loop cycle');
});