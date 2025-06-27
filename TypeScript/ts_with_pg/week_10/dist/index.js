"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    user: 'postgres',
    port: 5431,
    password: '123456789',
    database: 'test',
});
client.connect()
    .then(() => { console.log("Connected Successfully "); })
    .catch((err) => { console.log("Error While Connecting to DB", err); });
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query("CREATE TABLE users(id SERIAL PRIMARY Key,username VARCHAR(50) UNIQUE NOT null,email VARCHAR(255) UNIQUE NOT null,password varchar(255) NOT null,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);");
            console.log("Table Created Successfully ");
        }
        catch (error) {
            console.log(error);
        }
    });
}
createTable();
