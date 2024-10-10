export  default class Cl_Personal {
    constructor(cedula, edad, tipo) {
        this.cedula = cedula;
        this.edad = edad;   
        this.tipo = tipo;
    }

    esMayorEdad() {
        return this.edad >= 18;
    }

    sueldoBase() {
        return 150;
    }

}   