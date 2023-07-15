const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "",
//     host: "pern-todo-steel.vercel.app",
//     port: 5432,
//     database: "perntodo"
// });

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })

module.exports = pool;