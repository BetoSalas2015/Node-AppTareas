const Tarea = require('./tarea');

class Tareas {
    constructor() {
        this.listado = {};
    }

    get listadoArr() {
        const listadoArr = [];
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key];
            listadoArr.push(tarea);
        });   
        return listadoArr;
    };

    cargarListado = (arreglo) => {
        arreglo.forEach( (tarea) => {
            this.listado[tarea.id] = tarea;
        }) ;

    }

    imprimeTareas = () => {
        let salida = '';
        let cont = 1;
        this.listadoArr.forEach( (tarea) => {
            salida = `${cont.toString().green} ${tarea.desc.gray} :: `;
            if (tarea.completado) {
                salida += `${'Completado'.green}.`
            } else {
                salida += `${'Pendiente'.red}.`
            }
            console.log(salida);
            cont++; 
        } );
    } 

    imprimePendientesCompletadas = (tipo) => {
        let salida = '';
        let cont = 1;
        if (tipo) {
            this.listadoArr.forEach( (element) => {
                if (element.completado !== null) {
                    salida += `${cont.toString().green} ${element.desc.gray} :: ${'Completado'.green}.\n`;
                }
                cont++;
            } );
            console.log(salida);
        } else {
            this.listadoArr.forEach((element) => {
                if (element.completado === null) {
                    salida += `${cont.toString().green} ${element.desc.gray} :: ${'Pendiente'.red}.\n`;
                }
                cont++;
            });
            console.log(salida);
        }
    }

    borrarTarea = (id) => {
        if(this.listado[id])
            delete this.listado[id];
    }

    crearTarea = (desc) => {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;