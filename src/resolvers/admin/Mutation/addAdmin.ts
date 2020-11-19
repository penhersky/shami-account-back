import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuthAdmin';
import { logInfo } from '../../../lib/logger';

export default async (_: any, { admin: args }: any, context: any) =>
  cather(
    async (user: any) => {
      const admins = await Admin.find({
        $or: [{ email: args?.email }, { name: args?.name }],
      });

      if (admins.length) throw new Error('Such Administrator already exists!');

      const salt = await bcrypt.genSalt(10);

      const passwordHash = await bcrypt.hash(args?.password, salt);

      const newAdmin = await Admin.create({
        email: args?.email,
        name: args?.name,
        imageUrl: args?.imageUrl,
        password: passwordHash,
        state: args?.state ?? 'junior',
      });

      logInfo(`✔️ created new admin ${newAdmin.name} by ${user?.name}`);

      return newAdmin;
    },
    context,
    auth,
  );
