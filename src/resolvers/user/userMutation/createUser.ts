import bcrypt from 'bcrypt';

import { Location, User, Security } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuthAdmin';

import { SALT } from '../../../config';

export default async (_: any, { name, email, password }: any, context: any) =>
  cather(
    async () => {
      const user = await User.create({ name, email, provider: 'email' });

      const salt = await bcrypt.genSalt(Number(SALT));
      const hashPassword = await bcrypt.hash(password, salt);

      await Security.create({
        user: String(user.id),
        password: hashPassword,
      });

      await Location.create({
        user: String(user.id),
      });

      return user;
    },
    context,
    auth,
  );
