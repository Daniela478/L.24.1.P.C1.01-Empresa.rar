import Cl_Personal from "./Cl_Personal.js";

export default class Cl_Administrativo extends Cl_Personal {
    constructor(cedula, edad,  nivel=1) {
        super(cedula, edad, {tipo:2});
        this.nivel = nivel;
    }

    incentivo() {
        if (this. esMayorEdad()) {
            if (this.nivel==1)
                return 50;
            else
                return 100;
        }
        else
            return 0;
    }

    sueldoFinal() {
        return this.sueldoBase() + this.incentivo();
    }
}