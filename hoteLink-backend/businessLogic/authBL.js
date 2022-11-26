const fs = require('fs');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const bcrypt = require('bcrypt');
const authDA = require('../dataAccess/authDA')

const PRIVATE_KEY = fs.readFileSync('./keys/rsa_private.pem');
const PUBLIC_KEY = fs.readFileSync('./keys/rsa_public.pem');
const expireTime = 240;

//middleware verificador de token
const checkAuth = expressJwt.expressjwt({
    algorithms : ['RS256'],
    secret : PUBLIC_KEY
});

module.exports = {
    generateToken : async (email, passwd) =>{
        const wantedUser = await authDA.getUserByEmail(email);

        if(!wantedUser){
            return undefined;
        }
        
        if(bcrypt.compareSync(passwd, wantedUser.password)){
            const jwtToken = jwt.sign({}, PRIVATE_KEY, {
                algorithm : 'RS256',
                expiresIn : expireTime,
                subject :  wantedUser.id.toString(),
            })
            return {
                idToken: jwtToken,
                expiresIn: expireTime
            };
        }
        else {
            return undefined;
        }
    },
    checkAuth
}