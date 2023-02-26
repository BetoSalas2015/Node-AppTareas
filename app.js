const colors = require('colors');
const { mostrarMenu, pausa } = require('./js/mensajes');

const main = async () => {
    console.clear();
    let opc = '';
    do {
        opc = await mostrarMenu();
        console.log( { opc });
    } while (opc !== '0');

    await pausa();

};

main();