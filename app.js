const { generarTabla: crearArchivo, listarTabla } = require('./multiplicar/metodo-multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch((err) => console.log(err));
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}
// console.log(argv);

// let base = '5';

// let argv2 = process.argv;
// let argv2 = process.argv[2];
// let base = argv.split('=')[1];

// console.log(argv2);



console.log(module.exports);