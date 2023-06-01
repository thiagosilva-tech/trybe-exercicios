let n = 5;
let asteriscos = '';

if (n > 1) {
    for (let index = 0; index < n; index += 1) {
        asteriscos = asteriscos + '*';
    }
    for (let index = 0; index < n; index += 1) {
        console.log(asteriscos);
    }
}