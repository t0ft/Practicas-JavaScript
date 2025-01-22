texto = "arbol"
palabra = "a"

veces = 0

for (let c of texto) {
    if (c == palabra)
        veces++
}
console.log(`Se repite "${palabra}" la cantidad de veces: ${veces}`)