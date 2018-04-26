const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        let resultado = '';
        console.log(`====================`.green);
        console.log(`====tabla del ${base}=====`.green);
        console.log(`====================`.green);
        for (let i = 1; i <= limite; i++) {
            resultado += `${base} * ${i} = ${ base * i }\n`;
        }

        if (Number(base) && Number(limite)) {
            resolve(resultado);
        } else {
            reject(`El valor introducido "${base}" o "${limite}" no es un numero`);
        }
    });

}

// let generarTabla = async(base) => {
//     let resultado = '';
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${base} * ${i} = ${ base * i / 2 }`);
//         resultado += `${base} * ${i} = ${ base * i }\n`;
//     }

//     fs.writeFile(`./tablas/tabla-${base}.txt`, resultado, (err) => {
//         if (err)
//             throw new Error(`Ha ocurrido un error: ${err}`);
//         else
//             return `La tabla ${ base } ha sido creada en la ruta ./tablas/tabla-${base}.txt`;
//     });
// }

let generarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let resultado = '';

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un numero!`)
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base * i / 2 }`);
            resultado += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, resultado, (err) => {
            if (err)
                reject(`Ha ocurrido un error: ${err}`);
            else
                resolve(`tabla-${ base }-al-${limite} | (ruta: ./tablas/tabla-${base}-al-${limite}.txt)`);
        });

    });
}


module.exports = {
    generarTabla,
    listarTabla
}