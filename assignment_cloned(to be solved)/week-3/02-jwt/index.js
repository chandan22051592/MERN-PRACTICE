// const jwt = require('jsonwebtoken');
// const z = require("zod");
// const jwtPassword = 'secret';


// /**
//  * Generates a JWT for a given username and password.
//  *
//  * @param {string} username - The username to be included in the JWT payload.
//  *                            Must be a valid email address.
//  * @param {string} password - The password to be included in the JWT payload.
//  *                            Should meet the defined length requirement (e.g., 6 characters).
//  * @returns {string|null} A JWT string if the username and password are valid.
//  *                        Returns null if the username is not a valid email or
//  *                        the password does not meet the length requirement.
//  */
// function signJwt(username, password) {
//     usernameParse = z.string().email().safeParse(username);
//     passwordParse = z.string().min(6,"Password must be atleast 8 characters long").safeParse(password);
//     const token = "";

//     if(usernameParse.success &&  passwordParse.success){ 
//         return jwt.sign({
//             username : usernameParse.data,
//             password:passwordParse.data
//         },jwtPassword)

//     }else{
//         return null;
//     }
// }

// /**
//  * Verifies a JWT using a secret key.
//  *
//  * @param {string} token - The JWT string to verify.
//  * @returns {boolean} Returns true if the token is valid and verified using the secret key.
//  *                    Returns false if the token is invalid, expired, or not verified
//  *                    using the secret key.
//  */
// function verifyJwt(token) {
//     try {
//         jwt.verify(token,jwtPassword);
//         return true;
//     } catch (error) {
//         return false;
//     }
    
// }

// /**
//  * Decodes a JWT to reveal its payload without verifying its authenticity.
//  *
//  * @param {string} token - The JWT string to decode.
//  * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
//  *                         Returns false if the token is not a valid JWT format.
//  */
// function decodeJwt(token) {
//     const decodedObj = jwt.decode(token);
//     if(decodedObj){
//         return true;
//     }else{
//         false;
//     }
// }


// module.exports = {
//   signJwt,
//   verifyJwt,
//   decodeJwt,
//   jwtPassword,
// };


const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);

    return signature;
}

function verifyJwt(token) {
    let ans = true;
    try {
       jwt.verify(token, jwtPassword);
    } catch(e) {
       ans = false;
    }
    return ans;
}

function decodeJwt(token) {
    // true, false
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}
