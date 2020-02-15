const { Pool } = require('pg')
require('dotenv').config()
 const pool = new Pool({
 user: `${process.env.DB_USER}`,
 host: `${process.env.DB_HOST}`,
 database: `${process.env.DB_DATABASE}`,
 password: `${process.env.DB_PASSWORD}`,
 port: process.env.DB_PORT,
 ssl: true,
 })

 pool.query(`ELECT occupation, name, pet_name, class
 from pets
 INNER JOIN owners
 ON pets.owner_id = owners.owner_id
 WHERE class = 'Bird';`, (error, results) => {
 if (error) {
 throw error
 }
 console.log(results.rows)
 }) 