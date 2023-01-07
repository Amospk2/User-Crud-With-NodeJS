const { Person } = require('./person');
const  dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require('./src/database/connect');
connectToDatabase();

require('./modules/express.js');

/* const person = new Person("Amós"); */
/* require('./modules/fs.js'); */
/* require('./modules/path.js'); */
/* require('./modules/http.js'); */


