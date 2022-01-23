const argv = require("yargs")
    .options("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option("l",{
        alias:"listar",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero limite para la multiplicacion'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un numero";
        }
        if(argv.h <= 1){
            throw 'el numero tiene que ser mayor a 1'
        }
        return true
    })
    .argv;

module.exports=argv