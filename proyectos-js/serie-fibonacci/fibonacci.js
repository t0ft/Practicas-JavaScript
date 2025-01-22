function fibonacci(numero) {
    let serie = [0,1];

    for(let i = 2; i <=numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return [serie, serie[numero]];
}

console.log("Serie completa:" ,fibonacci(15)[0])
console.log("Resultado fib:" ,fibonacci(15)[1])