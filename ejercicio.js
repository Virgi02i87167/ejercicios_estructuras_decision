const readline = require('readline');
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
    console.log("8. Salir");
    rl.question("Digite la opción: ", (opcion) => {
        if (parseInt(opcion) === 1) {
            ejercicio1();
        } else if (parseInt(opcion) === 2) {
            ejercicio2();
        } else if (parseInt(opcion) === 3) {
            ejercicio3();
        } else if (parseInt(opcion) === 4) {
            ejercicio4();
        } else if (parseInt(opcion) === 5) {
            ejercicio5();
        } else if (parseInt(opcion) === 6) {
            ejercicio6();
        } else if (parseInt(opcion) === 7) {
            ejercicio7();
        } else if (parseInt(opcion) === 8) {
            rl.close(); 
        } else {
            console.log("Opción no válida. Por favor, ingrese un número del 1 al 8.");
            iniciar();
        }
    });
}

function ejercicio1() {
    rl.question("Ingrese un número: ", (numero) => {
        const num = parseFloat(numero);
        if (!isNaN(num)) {
            if (num > 0) {
                console.log("El número " + num + " es positivo");
            } else if (num < 0) {
                console.log("El número " + num + " es negativo");
            } else {
                console.log("El número es 0");
            }
        } else {
            console.log("Por favor, ingrese un número válido.");
        }
        iniciar(); 
    });
}

function ejercicio2() {
    rl.question("Ingrese el primer número: ", (numero1) => {
        rl.question("Ingrese el segundo número: ", (numero2) => {
            rl.question("Ingrese el tercer número: ", (numero3) => {
                const num1 = parseFloat(numero1);
                const num2 = parseFloat(numero2);
                const num3 = parseFloat(numero3);
                if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
                    if (num1 >= num2 && num1 >= num3) {
                        console.log(numero1 + " es mayor");
                    } else if (num2 >= num1 && num2 >= num3) {
                        console.log(numero2 + " es mayor");
                    } else if (num3 >= num1 && num3 >= num2) {
                        console.log(numero3 + " es mayor");
                    }
                } else {
                    console.log("Por favor, ingrese números válidos.");
                }
                iniciar(); 
            });
        });
    });
}

function ejercicio3() {
    rl.question("Digite el número para calcular su factorial: ", (n1) => {
        const num = parseFloat(n1);
        if (!isNaN(num)) {
            let resultado = 1;
            for (let i = 1; i <= num; i++) {
                resultado *= i;
            }
            console.log("El factorial de " + num + " es: " + resultado);
        } else {
            console.log("Por favor, ingrese un número válido.");
        }
        iniciar(); 
    });
}

function ejercicio4() {
    rl.question("Ingrese el número a evaluar: ", (num) => {
        const numero = parseFloat(num);
        if (!isNaN(numero)) {
            if (numero % 2 === 0) {
                console.log("El número es par");
            } else {
                console.log("El número no es par");
            }
        } else {
            console.log("Por favor, ingrese un número válido.");
        }
        iniciar();
    });
}

function ejercicio5() {
    rl.question("Ingrese el primer color: ", (color1) => {
        rl.question("Ingrese el segundo color: ", (color2) => {
            if ((color1 === "azul" && color2 === "amarrillo") || (color1 === "amarrillo" && color2 === "azul")) {
                console.log("La mezcla genera el color verde");
            } else if ((color1 === "azul" && color2 === "rojo") || (color1 === "rojo" && color2 === "azul")) {
                console.log("La mezcla genera el color morado");
            } else if ((color1 === "rojo" && color2 === "amarrillo") || (color1 === "amarrillo" && color2 === "rojo")) {
                console.log("La mezcla genera el color naranja");
            } else {
                console.log("La combinación no se encuentra disponible");
            }
            iniciar(); 
        });
    });
}

function ejercicio6() {
    rl.question("Digite el número de mes a conocer: ", (nMes) => {
        const numeroMes = parseInt(nMes);
        if (!isNaN(numeroMes) && numeroMes >= 1 && numeroMes <= 12) {
            let nombreMes;
            switch (numeroMes) {
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
            }
            console.log("El mes correspondiente al número " + numeroMes + " es " + nombreMes);
        } else {
            console.log("Por favor, ingrese un número de mes válido (del 1 al 12).");
        }
        iniciar(); 
    });
}

function ejercicio7() {
    rl.question("Digite la categoría de vehículo: ", (categoria) => {
        let tipoVehiculo;
        switch (categoria.toLowerCase()) {
            case 'moto':
                tipoVehiculo = "Motocicleta";
                break;
            case 'auto':
                tipoVehiculo = "Automóvil";
                break;
            case 'camion':
                tipoVehiculo = "Super Camión";
                break;
            case 'bicicleta':
                tipoVehiculo = "Super Bicicleta";
                break;
            default:
                tipoVehiculo = "La categoría digitada no existe";
                break;
        }
        console.log(tipoVehiculo);
        iniciar(); 
    });
}

iniciar();
