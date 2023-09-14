import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import passport from 'passport';
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Random string';

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log(jwt_payload);
}));


