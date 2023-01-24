let sn = prompt("Quieres armar un tour personalizado (si/no)")

if (sn === "si") {
    alert("Empecemos a armar tu viaje");

    function validar(num1, num2, pregunta) {
        let var1;
        do {
            var1 = prompt(pregunta);
            var1 = parseInt(var1);
        } while ((var1 < num1) || (var1 > num2));
        return var1;
    }
    function noRepetirPais(pais, paisElegido, flag) {
        if (pais == paisElegido){
            alert("Este pais ya fue seleccionado");
            return false;
        } else {
            return flag;
        }
    }
    function elegirPais(paises, noRepetirPais) {
        let flag;
        while (op_pais != 0) { 
            if (viaje.paises.length < 2) {
                op_pais = validar(1, 5, "Que paises te gustaria conocer (min:2): \n" + "1) " + paises[0] + "\n" + "2) " + paises[1] + "\n" + "3) " + paises[2] + "\n" + "4) " + paises[3] + "\n" + "5) " + paises[4]);
            } else {
                op_pais = validar(0, 5, "Que paises te gustaria conocer (min:2): \n" + "1) " + paises[0] + "\n" + "2) " + paises[1] + "\n" + "3) " + paises[2] + "\n" + "4) " + paises[3] + "\n" + "5) " + paises[4] + "\n 0) Ya elegi todos los paises a los que quiero ir");
            }
            flag = true;
            for(let pais of viaje.paises){
                flag = noRepetirPais(pais, paises[op_pais-1], flag);
            }
            if ((op_pais != 0)&&(flag == true)) {
                viaje.paises.push(paises[op_pais - 1]);
            }
            
        }
    }

    let areas = [{
            nombre: "Africa",
            costoInicial: 800000,
            paises: ["Sudáfrica", "Egipto", "Tanzania", "Etiopía", "Malawi"]
        },
        {
            nombre: "America del sur",
            costoInicial: 180000,
            paises: ["Ecuador", "Chile", "Brazil", "Colombia", "Peru"]
        },
        {
            nombre: "America del Norte",
            costoInicial: 430000,
            paises: ["Estados Unidos", "Mexico", "Canada", "Alaska", "Groenlandia"]
        },
        {
            nombre: "Centroamerica",
            costoInicial: 500000,
            paises: ["Cuba", "Puerto Rico", "Panama", "Nicaragua", "Belice"]
        },
        {
            nombre: "Asia Oriental",
            costoInicial: 1500000,
            paises: ["China", "Corea del Norte", "Corea del Sur", "Mongolia", "Japon"]
        },
        {
            nombre: "Asia del Sur",
            costoInicial: 800000,
            paises: ["Bangladesh", "Bhután", "India", "Maldivas", "Nepal"]
        },
        {
            nombre: "Asia Sudoriental Continental",
            costoInicial: 1200000,
            paises: ["Indonesia", "Filipinas", "Malasia", "Vietnam", "Camboya"]
        },
        {
            nombre: "Europa",
            costoInicial: 500000,
            paises: ["Portugal", "Francia", "Inglaterra", "España", "Alemania"]
        },
        {
            nombre: "Oceania",
            costoInicial: 2000000,
            paises: ["Australia", "Nueva Zelanda", "Islas Fiyi", "Papua Nueva Guinea", "Micronesia"]
        },
    ]
    let viaje = {
        area: "",
        costoAprox: 0,
        cantPers: 0,
        paises: [],
        diasPais: 0,
        excPais: 0,
        email: "",
        comentarios: ""
    };

    let op = validar(1, 9, "Elige el región a la que te gustaria ir: \n \n 1) Africa \n 2) America del Sur \n 3) America del Norte \n 4) Centroamerica \n 5) Asia Oriental \n 6) Asia del Sur \n 7) Asia Sudoriental Continental \n 8) Europa \n 9) Oceania");
    viaje.area = areas[op - 1].nombre;
    let op_pais;
    elegirPais(areas[op - 1].paises, noRepetirPais);
    viaje.cantPers = validar(1, 10, "Cuantas personas quieren realizar este viaje (entre 1 y 10)?");
    viaje.diasPais = validar(3, 15, "¿Cuantos dias quieres alojarte en cada pais(entre 3 y 15)?");
    viaje.excPais = validar(0, 7, "¿A cuantas excursiones le gustaría ir por pais a visitar(entre 0 y 7)?");
    viaje.comentarios = prompt("Quieres agregar algun comentario?");
    viaje.email = prompt("Dejanos tu email para contactarte");
    viaje.costoAprox = ((areas[op-1].costoInicial + viaje.paises.length * viaje.diasPais * 35000 + (viaje.paises.length - 1) * 35000 + viaje.paises.length * viaje.excPais * 15000) * viaje.cantPers) * 1.05;
    alert("Ya estamos preparando tu tour \n \n Los datos del mismo son: \n\n Area: " + viaje.area + " \n Paises: " + viaje.paises.join(", ") + ".\n  Cantidad de personas: " + viaje.cantPers + "\n Dias para alojarse en cada pais: " + viaje.diasPais + "\n Excursiones por pais: " + viaje.excPais + " \n Email: " + viaje.email + "\n Comentarios: " + viaje.comentarios + "\n Costo Aproximado: $" + viaje.costoAprox + "\n\n  Este incluye hotel tres estrellas, traslado y las excursiones solicitadas por viaje");
}