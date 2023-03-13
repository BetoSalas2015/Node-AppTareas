const colors = require('colors');
const { inquirerMenu, 
        pausa, 
        capturaEntrada, 
        listadoTareasBorrar, 
        confirmar,
        listadoSeleccionar } = require('./js/inquirer');
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
            case 2: tareas.imprimeTareas();  break;
            case 3: tareas.imprimePendientesCompletadas(true); break;
            case 4: tareas.imprimePendientesCompletadas(false); break;
            case 5: const comp = await listadoSeleccionar(tareas.listadoArr); 
                    tareas.cambiaTareas(comp);
                    break;
            case 6: const id = await listadoTareasBorrar(tareas.listadoArr); 
                    if(id === 0) break;
                    const ok = await confirmar('¿Desea Borrar la tarea?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada.'.green);
                    }
                    break;
            
        
        }
        guardabase(tareas.listadoArr);

        if (opc !== 0) {
            await pausa();
        }
    } while (opc !== 0);

};

main();