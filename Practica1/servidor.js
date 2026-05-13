console.log("Hola Mundo JS desde el servidor")

/* operaciones */ 
let edad = 11
const edad2 = 42

console.log("edad promedio")
console.log((edad + edad2) / 2)

/* Medir tiempo de un proceso */
console.time("miProceso")

for(let i = 0; i < 1000000000; i++){

}

console.timeEnd("miProceso")

/* objetos tipo tabla */
let usuario = [
    {nombre: "Alan", edad:22},
    {nombre:"santiago", edad: 23},
  
]

console.table(usuario)