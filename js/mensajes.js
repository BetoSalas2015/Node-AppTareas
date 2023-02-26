const colors = require('colors');

const mostrarMenu = () => {

    return new Promise( (resolve) => {
        console.clear();
        console.log("=========================".green);
        console.log("= Seleccione una opción =".green);
        console.log("=========================\n".green);
        console.log(`${"1.".green} Crear Tarea`);
        console.log(`${"2.".green} Listar Tareas`);
        console.log(`${"3.".green} Listar Tareas terminadas`);
        console.log(`${"4.".green} Listar Tareas pendientes`);
        console.log(`${"5.".green} Completar tareas`);
        console.log(`${"6.".green} Borrar tarea`);
        console.log(`${"0.".green} Salir\n`);

        const readline = require('readline').createInterface( {
            input: process.stdin,
            output: process.stdout
        } );

        readline.question("Seleccione una opción: ", (opc) => {
            readline.close();
            resolve(opc);
        } );

    });

}

const pausa = () => {

    return new Promise( (resolve) => {
        const readline = require('readline').createInterface( {
            input: process.stdin,
            output: process.stdout
        } );

        readline.question(`Presione ${'ENTER'.red} para continuar..`, (opc) => {
            readline.close();
            resolve(opc);
        } );
    });
 
};

module.exports = {
    mostrarMenu,
    pausa
};