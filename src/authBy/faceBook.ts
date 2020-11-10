import passport from 'passport';
import { Profile, Strategy } from 'passport-facebook';

import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  APP_URL,
  CLIENT_URL,
} from '../config';

const passportFacebook = passport.use(
  new Strategy(
    {
      clientID: String(FACEBOOK_APP_ID),
      clientSecret: String(FACEBOOK_APP_SECRET),
      callbackURL: `${APP_URL}/auth/facebook/callback`,
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void,
    ) => {
      done(null, {});
      console.log(profile);
      // User.findOrCreate({}, function (err, user) {
      //   if (err) {
      //     return done(err);
      //   }
      //   done(null, user);
      // });
    },
  ),
);

export const loginMiddleware = passportFacebook.authenticate('facebook');

export const authMiddleware = passportFacebook.authenticate('facebook', {
  successRedirect: `${CLIENT_URL}/`,
  failureRedirect: `account.${CLIENT_URL}/login`,
  session: false,
});

export default passportFacebook;
