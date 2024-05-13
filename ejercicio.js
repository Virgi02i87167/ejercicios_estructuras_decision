const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function iniciar() {
    console.log("=== Menú de opciones ===");
    console.log("1. Determinar si un número es positivo, negativo o cero");
    console.log("2. Encontrar el mayor de tres números");
    console.log("3. Calcular el factorial de un número");
    console.log("4. Determinar si un número es par");
    console.log("5. Determinar el color resultante de mezclar dos colores primarios");
    console.log("6. Obtener el nombre de un mes a partir de su número");
    console.log("7. Determinar el tipo de vehículo según la categoría");
    rl.question("Digite la opcion: ", (opcion) => {
        if (parseInt(opcion) === 1) {
            ejercicio1()
        } else if (parseInt(opcion) === 2) {
            ejercicio2()
        } else if (parseInt(opcion) === 3) {
            ejercicio3()
        } else if (parseInt(opcion) === 4) {
            ejercicio4()
        } else if (parseInt(opcion) === 5) {
            ejercicio5()
        } else if (parseInt(opcion) === 6) {
            ejercicio6()
        } else if (parseInt(opcion) === 7) {
            ejercicio7()
        } else if (parseInt(opcion) === 8) {
            iniciar()
        }
    })
}

iniciar()

function ejercicio1() {
    function evaluar(numero) {
        if (numero >= 1) {
            return console.log("El numero " + numero + " es positivo")
        } else if (numero <= -1) {
            return console.log("El numero " + numero + " es negativo")
        } else {
            return console.log("El numero es 0");
        }
    }

    rl.question("Ingrese un número: ", (numero) => {
        const num = evaluar(numero);
    })
    iniciar()
}

function ejercicio2() {
    function Calcular(numero1, numero2, numero3) {
        if (parseFloat(numero1) >= parseFloat(numero2) && parseFloat(numero1) >= parseFloat(numero3)) {
            return console.log(numero1 + " es mayor")
        } else if (parseFloat(numero2) >= parseFloat(numero1) && parseFloat(numero2) >= parseFloat(numero3)) {
            return console.log(numero2 + " es mayor")
        } else if (parseFloat(numero3) >= parseFloat(numero1) && parseFloat(numero3) >= parseFloat(numero2)) {
            return console.log(numero3 + " es mayor")
        }
    }

    rl.question("Ingrese el primer número: ", (numero1) => {
        rl.question("Ingrese el segundo número: ", (numero2) => {
            rl.question("Ingrese el tercer numero: ", (numero3) => {
                const num = Calcular(numero1, numero2, numero3);
            })
        })
    })
    iniciar()
}

function ejercicio3() {
    rl.question("Digite el numero a realizar el factorial: ", (n1) => {
        let resultado = 1;
        for (let i = 1; i <= parseFloat(n1); i++) {
            resultado *= i;
        }
        console.log("El factorial es: " + resultado);
    })
    iniciar()
}

function ejercicio4() {
    rl.question("Ingrese el numero a evaluar: ", (num) => {
        if (parseFloat(num) % 2 === 0) {
            console.log("El numero es par");
        } else {
            console.log("El numero no es par");
        }
    })
    iniciar()
}

function ejercicio5() {
    // // 5 Ejercicio de colores primarios

    rl.question("Ingrese el primero color: ", (color1) => {
        rl.question("Ingrese el segundo color: ", (color2) => {
            if (color1 === "azul" && color2 === "amarrillo") {
                console.log("La mezcla genera el color verde")
            } else if (color1 === "azul" && color2 === "rojo") {
                console.log("La mezcla genera el color morado")
            } else if (color1 === "rojo" && color2 === "amarrillo") {
                console.log("La mezcla genera el color naranja")
            }
            else {
                console.log("La combinacion no se encuentra disponible")
            }
        })
        iniciar()
    })
    
}

function ejercicio6() {
    // 6 numero de meses
    rl.question("Digite el numero de mes a conocer: ", (nMes) => {
        let nombreMes
        switch (parseInt(nMes)) {
            case 1:
                nombreMes = "Enero";
                break;
            case 2:
                nombreMes = "Febrero";
                break;
            case 3:
                nombreMes = "Marzo";
                break;
            case 4:
                nombreMes = "Abril";
                break;
            case 5:
                nombreMes = "Mayo";
                break;
            case 6:
                nombreMes = "Junio";
                break;
            case 7:
                nombreMes = "Julio";
                break;
            case 8:
                nombreMes = "Agosto";
                break;
            case 9:
                nombreMes = "Septiembre";
                break;
            case 10:
                nombreMes = "Octubre";
                break;
            case 11:
                nombreMes = "Noviembre";
                break;
            case 12:
                nombreMes = "Diciembre";
                break;
            case 13:
                nombreMes = "Numero de mes no existe";
                break;
        }
        console.log(nombreMes)
        iniciar()
    })
}

function ejercicio7() {
    // 7. Determinar el tipo de vehiculo seleccionado segun la categoria que se ingrese,
    // las categorias

    rl.question("Digite la categoria de vehiculo: ", (categoria) => {
        let tipoVehiculo
        switch (categoria) {
            case 'Moto':
                tipoVehiculo = "Motocicleta"
                break
            case 'Auto':
                tipoVehiculo = "Automovil"
                break
            case 'Camion':
                tipoVehiculo = "Super Camion"
                break
            case 'Bicicleta':
                tipoVehiculo = "Super bicicleta"
                break
            default:
                tipoVehiculo = "La categoria digitada no existe"
                break
        }
        console.log(tipoVehiculo)
        iniciar()
    })
}