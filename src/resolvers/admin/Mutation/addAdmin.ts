import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth, { highSecurityCheck } from '../../../lib/checkAuthAdmin';
import { logInfo } from '../../../lib/logger';
import { isProduction } from '../../../config';

export default async (_: any, { admin: args }: any, context: any) =>
  cather(
    async (user: any) => {
      const admins = await Admin.find({
        $or: [{ email: args?.email }, { name: args?.name }],
      });

      if (!highSecurityCheck(user)) return new Error('Access denied!');

      if (admins.length) throw new Error('Such Administrator already exists!');

      const salt = await bcrypt.genSalt(10);

      const passwordHash = await bcrypt.hash(args?.password, salt);

      const newAdmin = await Admin.create({
        email: args?.email,
        name: args?.name,
        imageUrl: args?.imageUrl,
        password: passwordHash,
        state: args?.state ?? 'moderator',
      });

      logInfo(`✔️ created new admin ${newAdmin.name} by ${user?.name}`);

      return newAdmin;
    },
    context,
    auth,
    isProduction,
  );
