/*En una empresa se conoce el nombre, edad y tipo de empleado de todo su personal , 
con un sueldo base de $150. Trabajan obreros (1) y administrativos (2).
 Los obreros hasta con 3 hijos reciben $50 de bono, con más de 3 hijos reciben $70.
  Los administrativos tienen nivel de estudio (1=bachiller, 2=técnico, 3=universitario),
   y reciben un incentivo (sólo si son mayor de edad) de $50 para bachilleres y $100 si
    tienen otro nivel. Se desea conocer el sueldo final de cada empleado y el total que
     paga la empresa por sueldos. 
     Considere los obreros (cedula, edad, cntHijos) - (222,20,2) - (333,17,0) - (444,22,5),
      y los administrativos (cedula, edad, nivel) - (111,15,1) - (555,19,3)*/

      import Cl_Empresa from "./Cl_Empresa.js";
      import Cl_Obrero from "./Cl_Obrero.js";
      import Cl_Administrativo from "./Cl_Administrativo.js";
      
      let empresa=new Cl_Empresa();
      let obrero=new Cl_Obrero(222,20,2);
      let obrero2=new Cl_Obrero(333,17,0);
      let obrero3=new Cl_Obrero(444,22,5);
      let administrativo=new Cl_Administrativo(111,15,1);
      let administrativo2=new Cl_Administrativo(555,19,3);
      empresa.procesarPersonal(obrero);
      empresa.procesarPersonal(obrero2);
      empresa.procesarPersonal(obrero3);
      empresa.procesarPersonal(administrativo);
      empresa.procesarPersonal(administrativo2);

      let salida= document.getElementById("Salida");

      let mostrarPersonal=(personal)=>{
        return `
        <tr>
              <td>${personal.cedula}</td>
              <td>${personal.edad}</td> 
              <td>$${personal.sueldoFinal()}</td>
          </tr>
           `;
      };
      salida.innerHTML=`<table>
       <tr>
              <th>Cedula</th>
              <th>Edad</th>
               <th>Sueldo Final</th>
          </tr>
          ${mostrarPersonal(obrero)}
          ${mostrarPersonal(obrero2)}
          ${mostrarPersonal(obrero3)}
          ${mostrarPersonal(administrativo)}
          ${mostrarPersonal(administrativo2)}
      </table>
      <br>Total que paga la empresa por sueldos: $${empresa.devolversueldototal().toFixed(2)}
      `;
      