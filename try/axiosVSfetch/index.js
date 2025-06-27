const axios = require("axios");

// async function main() {
//     const response = await fetch("http://localhost:3000/todos")
//     const json = await response.json();
//     console.log(json.length); 
// }

async function main() {
    const response = await axios.get("http://localhost:3000/todos")
    console.log(response.data.length);
}

main()