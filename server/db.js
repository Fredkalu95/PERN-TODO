const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    host: "pern-todo-steel.vercel.app",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;