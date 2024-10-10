// El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
// Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
// Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a
// 15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca.
// Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un
// estudiante y reporte el monto de la beca, o si no le corresponde beca. 


import Cl_becado from "./Cl_becado.js";

let estudiante1 = new Cl_becado("Mary", 132, 8);
let estudiante2 = new Cl_becado("Alirio", 315, 35)

let salida = document.getElementById("Salida");
salida.innerHTML = `
    <span>Nombre del estudiante: ${estudiante1.nombre}</span><br>
    <span>Acumulado de notas: ${estudiante1.notas}</span><br>
    <span>Cantidad de materias: ${estudiante1.materias}</span><br>
    <span>Nota promedio: ${estudiante1.promedioNotas()}</span><br>
    <span>${estudiante1.esBecado()}</span><br>
    <br>
    <span>Nombre del estudiante: ${estudiante2.nombre}</span><br>
    <span>Acumulado de notas: ${estudiante2.notas}</span><br>
    <span>Cantidad de materias: ${estudiante2.materias}</span><br>
    <span>Nota promedio: ${estudiante2.promedioNotas()}</span><br>
    <span>${estudiante2.esBecado()}</span><br>
`;