import bcrypt from 'bcrypt';

import { Location, User, Security, AccountType } from '../../../models';
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

      const accountType = await AccountType.create({
        user: String(user.id),
      });

      await user.updateOne({
        accountType: accountType.id,
      });

      await Location.create({
        user: String(user.id),
      });

      return user;
    },
    context,
    auth,
  );
