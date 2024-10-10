import Cl_Personal from "./Cl_Personal.js";
export default class Cl_Obrero extends Cl_Personal {
    constructor(cedula, edad, canthijos=0) {
        super(cedula, edad, {tipo:1});
        this.canthijos = canthijos;
    }

    bono(){
        if (this.canthijos > 3)
            return 70;
        else
            return 50;
    }

    sueldoFinal(){
        return this.sueldoBase() + this.bono();
    }
}