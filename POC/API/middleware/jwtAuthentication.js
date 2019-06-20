let jwtTokden = require('jsonwebtoken')
const config = require('../configJwt')

let checkToken = (req, res, next) =>
{
    debugger;
    let token = req.headers['x-access-token'] || req.headers['authorization']    

    if(token)
    {
        if(token.startsWith('Bearer '))
        {
            token= token.slice(7, token.length);
        }

        jwtTokden.verify(token, config.publicKey, config.verifyOptions , (err, decoded) => {
            if(err)
            {
                return res.json({
                    success: false,
                    message : 'Token is not valid.'
                });
            }
            else
            {
                req.decoded = decoded;
                next();
            }
        });
    }
    else
    {
        return res.json({
            success: false,
            message : 'Token not found'
        });
    }
}

exports.checkToken = checkToken


