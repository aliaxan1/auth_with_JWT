import jwt from 'jsonwebtoken';

const secret = 'my secret';

const jwtMiddleware = (req, res, next) => {

    // get the authorization header

    const authHeader = req.headers.authorization;

    // check if the header exists and starts with 'Bearer '

    if (authHeader && authHeader.startsWith('Bearer ')) {

        // get the token from the header

        const token = authHeader.split(' ')[1];

        // verify the token

        jwt.verify(token, secret, (err, payload) => {

            if (err) {

                // send a 401 response or call the next middleware with an error

                res.status(401).send('Invalid token');

                // next(err);

            } else {

                // attach the payload to the request object

                req.user = payload;

                // call the next middleware

                next();

            }

        });

    } else {

        // send a 401 response or call the next middleware with an error

        res.status(401).send('No token provided');

        // next(new Error('No token provided'));

    }

};

export default jwtMiddleware;
