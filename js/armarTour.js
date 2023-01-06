let sn = prompt("Quieres armar un tour personalizado (si/no)")
if (sn === "si") {
    alert("Empecemos a armar tu viaje")
    let op = prompt("Elige el región a la que te gustaria ir: \n \n 1) Africa \n 2) America del Sur \n 3) America del Norte \n 4) Centroamerica \n 5) Asia Oriental \n 6) Asia del Sur \n 7) Asia Sudoriental Continental \n 8) Europa \n 9) Oceania");
    let pais1 = false,
        pais2 = false,
        pais3 = false,
        pais4 = false,
        pais5 = false,
        op_pais;
    let co = 0,
        costo_aprox;

    function validar(num1, num2, pregunta) {
        let var1;
        do {
            var1 = prompt(pregunta);
            var1 = parseInt(var1);
        } while ((var1 < num1) || (var1 > num2));
        return var1;
    }

    function elegirPais(paises) {
        while (op_pais != 0) {
            if (co < 2) {
                op_pais = validar(1, 5, "Que paises te gustaria conocer (min:2): \n" + paises);
            } else {
                op_pais = validar(0, 5, "Que paises te gustaria conocer (min:2): \n" + paises + "\n 0) Ya elegi todos los paises a los que quiero ir");
            }
            switch (op_pais) {
                case 1:
                    if (pais1) {
                        alert("el pais indicado ya fue elegido")
                        co--;
                    }
                    pais1 = true;
                    break;
                case 2:
                    if (pais2) {
                        alert("el pais indicado ya fue elegido")
                        co--;
                    }
                    pais2 = true;
                    break;
                case 3:
                    if (pais3) {
                        alert("el pais indicado ya fue elegido")
                        co--;
                    }
                    pais3 = true;
                    break;
                case 4:
                    if (pais4) {
                        alert("el pais indicado ya fue elegido")
                        co--;
                    }
                    pais4 = true;
                    break;
                case 5:
                    if (pais5) {
                        alert("el pais indicado ya fue elegido")
                        co--;
                    }
                    pais5 = true;
                    break;
            }
            co++;
        }
        co--;
    }
    switch (op) {
        //Africa
        case '1':
            costo_aprox = 600000;
            elegirPais("1) Sudáfrica \n 2) Egipto \n 3) Tanzania \n 4) Etiopía \n 5) Malawi");
            break;

            //America del sur
        case '2':
            costo_aprox = 180000;
            elegirPais("1) Ecuador \n 2) Chile \n 3) Brazil \n 4) Colombia \n 5) Peru");
            break;

            //America del Norte
        case '3':
            costo_aprox = 430000;
            elegirPais("1) Estados Unidos  \n 2) Mexico \n 3) Canada \n 4) Alaska (no es un pais pero lo contamos como uno) \n 5) Groenlandia");
            break;

            //Centroamerica
        case '4':
            costo_aprox = 500000;
            elegirPais("1) Cuba \n 2) Puerto Rico \n 3) Panama \n 4) Nicaragua \n 5) Belice");
            break;

            //Asia Oriental
        case '5':
            costo_aprox = 1500000;
            elegirPais("1) China \n 2) Corea del Norte \n 3) Corea del Sur \n 4) Mongolia \n 5) Japon")
            break;

            //Asia del Sur
        case '6':
            costo_aprox = 800000;
            elegirPais("1) Bangladesh  \n 2) Bhután \n 3) India \n 4) Maldivas \n 5) Nepal");
            break;

            //Asia Sudoriental Continental
        case '7':
            costo_aprox = 1200000;
            elegirPais("1) Indonesia \n 2) Filipinas \n 3) Malasia \n 4) Vietnam \n 5) Camboya");
            break;

            //Europa
        case '8':
            costo_aprox = 500000;
            elegirPais("1) Portugal \n 2) Francia \n 3) Inglaterra \n 4) España \n 5) Alemania");
            break;

            //Oceania
        case '9':
            costo_aprox = 2000000;
            elegirPais("1) Australia \n 2) Nueva Zelanda \n 3) Islas Fiyi \n 4) Papua Nueva Guinea \n 5) Micronesia");
            break;
        default:
            alert("El caracter ingresado no es una opcion");
            break;
    }
    if (co > 2) {
        let num_dias = validar(3, 15, "¿Cuantos dias quieres alojarte en cada pais(entre 3 y 15)?");
        let num_exc = validar(0, 7, "¿A cuantas excursiones le gustaría ir por pais a visitar(entre 0 y 7)?");

        alert("costo: " + costo_aprox + "\n cant. paises: " + co + "\n num. dias: " + num_dias + "\n num. exc: " + num_exc);
        // Calculo de hotel + vuelos internos + excursiones por pais
        costo_aprox = costo_aprox + co * num_dias * 35000 + (co - 1) * 35000 + co * num_exc * 15000;

        let comentario = prompt("¿Quieres dejar algun comentario?");
        let email = prompt("Dejanos tu email para contactarte");
        alert("Ya estamos preparando tu tour \n \n El precio aproximado es de: " + costo_aprox + "\n Este incluye hotel, traslado y las excursiones solicitadas por viaje");
    }
}