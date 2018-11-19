// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const pg = require('pg');
//uses
app.use( express.static( 'server/public/' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
//globals
const port = process.env.PORT || 5000;
const Pool = pg.Pool;
const pool = new Pool ({
    database: 'storm',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}) // end pool

//
pool.on( 'connect', ()=>{
    console.log('connected to db');
})

pool.on( 'error', (err)=>{
    console.log('error with db', err);
})


// spin up server
app.listen( port, ( req, res )=>{
    console.log( 'server up on:', port );
});

//test
app.get('/test', (req,res)=>{
    console.log('test GET HIT');
    const queryString = `SELECT * FROM songs;`;

    pool.query ( queryString )
    .then( (result)=>{
        res.send(result.rows);
    }).catch(( err )=>{
        console.log('error', err);
    });
});