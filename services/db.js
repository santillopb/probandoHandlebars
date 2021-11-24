const mysql = require('mysql2/promise');

const config = require("../config.js");

async function query(sql) {
    try {
        const connection = await mysql.createConnection(config);
        const [results, ] = await connection.execute(sql);
        return results;
    } catch(err){
        throw(err);
    }

    
}

module.exports = {query};