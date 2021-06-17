import passport from 'passport';
import { Profile, OAuth2Strategy } from 'passport-google-oauth';

import {
  GOOGLE_APP_ID,
  GOOGLE_APP_SECRET,
  APP_URL,
  CLIENT_URL,
} from '../config';

const passportGoogle = passport.use(
  new OAuth2Strategy(
    {
      clientID: String(GOOGLE_APP_ID),
      clientSecret: String(GOOGLE_APP_SECRET),
      callbackURL: `${APP_URL}/auth/google/callback`,
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void,
    ) => {
      done(null, {});
      console.log(profile);
      /* 
       {
          id: '',
          displayName: '',
          name: { familyName: '', givenName: '' },
          photos: [
            {
              value: ''
            }
          ],
          provider: '',
          _json: {
            locale: 'uk'
          }
        }
       */
      // User.findOrCreate({}, function (err, user) {
      //   if (err) {
      //     return done(err);
      //   }
      //   done(null, user);
      // });
    },
  ),
);

export const loginGoogleMiddleware = passportGoogle.authenticate('google', {
  scope: 'https://www.googleapis.com/auth/plus.login',
});

export const authGoogleMiddleware = passportGoogle.authenticate('google', {
  successRedirect: `${CLIENT_URL}/`,
  failureRedirect: `account.${CLIENT_URL}/login`,
  session: false,
});

export default passportGoogle;
