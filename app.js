const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada } = require('./js/inquirer');
const Tareas = require('./Modelos/tareas');
const { guardabase, cargaBase } = require('./js/guardabase');

const main = async () => {

    let opc = 0;
    tareas = new Tareas();

    do {
        opc = await inquirerMenu();
        const tareasbd = await cargaBase();
        if ( tareasbd ) {
            await tareas.cargarListado(tareasbd);
        }

        switch (opc) {
            case 1: 
                const resp = await capturaEntrada('Descripción: ');
                tareas.crearTarea(resp);  
                break;
            case 2: console.log(tareas.listadoArr);  break;
        
        }
        guardabase(tareas.listadoArr);

        if (opc !== 0) {
            await pausa();
        }
    } while (opc !== 0);

};

main();