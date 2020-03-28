const argv = require('./config/yargs').argv;
const info = require('./info/info');




info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);