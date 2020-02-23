const optsCreate = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const optsUpdate = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: true,
        alias: 'c'
    }
};

const optsDelete = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', optsCreate)
    .command('actualizar', 'actualizar el estado completado de una tarea', optsUpdate)
    .command('borrar', 'borra una tarea', optsDelete)
    .help()
    .argv;

module.exports = { argv };