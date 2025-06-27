import {Client} from 'pg';

const client = new  Client({
    host:'localhost',
    user:'postgres',
    port:5431,
    password:'123456789',
    database:'test',
})

client.connect()
    .then(()=>{console.log("Connected Successfully ")})
    .catch((err)=>{console.log("Error While Connecting to DB",err)});


async function createTable():Promise<void>{
    try {
        const result = await client.query("CREATE TABLE users(id SERIAL PRIMARY Key,username VARCHAR(50) UNIQUE NOT null,email VARCHAR(255) UNIQUE NOT null,password varchar(255) NOT null,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);")  
        console.log("Table Created Successfully ");
        
    } catch (error) {
        console.log(error);        
    }
    
}

createTable();