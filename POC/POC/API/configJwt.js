const fs = require('fs')
const jwt = require('jsonwebtoken')

let payload = {
    name:"xpanxion",
    project:"kibo"
}

var privateKey = fs.readFileSync('./keys/private.key')
var publicKey = fs.readFileSync('./keys/public.key')

var issuer = "xpanxion";
var subject = "pkumar@xpanxion.com";
var audiance = "xpanxion.com";


var signOptions = {
    issuer: issuer,
    subject: subject,
    audience: audiance,
    expiresIn : '12h',
    algorithm: "RS256"
}

var verifyOptions = {
    issuer:  issuer,
    subject:  subject,
    audience:  audiance,
    expiresIn:  "12h",
    algorithm:  ["RS256"]
   };

let config ={
   verifyOptions: verifyOptions,
   signOptions: signOptions,
   privateKey:privateKey,
   publicKey: publicKey,
   payload: payload
}

module.exports = config;

