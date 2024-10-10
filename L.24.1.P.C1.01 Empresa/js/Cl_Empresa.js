export default class Cl_Empresa {
    constructor() {
        this.acumsueldos=0;
    }

    procesarPersonal(personal) {
        this.acumsueldos += personal.sueldoFinal();
    }

    devolversueldototal(){
        return this.acumsueldos;
    }
}