const Pool = require("pg").Pool;

const pool = new Pool({
    user: "amintu",
    //host: "localhost",
    host: "dpg-cjdal92vvtos73al4ke0-a",
    database: "games_k0lo",
    password: "krYpGdS0yFs42F0NWlWjAoRxroZyBFXF",
    port: 5432,
});

module.exports = pool;