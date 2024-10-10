import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_becado extends Cl_estudiante{
    constructor(nombre, notas, materias) {
        super(nombre, notas, materias)
        this.beca = 0;
    }
    esBecado() {
        if (this.promedioNotas() > 15) {
            this.beca = 30;
            return this.nombre + " recibe una beca de $" + this.beca; 
        } else if (this.promedioNotas() >= 10 &&  this.promedioNotas() <= 15) {
            this.beca = 20;
            return this.nombre + " recibe una beca de $" + this.beca;
        } else {
            return this.nombre + " no le corresponde beca";
        }
    }
}