import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuthAdmin';

export default async (_: any, { admin: args }: any, context: any) =>
  cather(
    async () => {
      const admin = await Admin.findOne({ email: args?.email });
      if (admin) throw new Error('Administrator with such mail already exists');

      const salt = await bcrypt.genSalt(10);

      const passwordHash = await bcrypt.hash(args?.password, salt);

      const newAdmin = await Admin.create({
        email: args?.email,
        name: args?.name,
        imageUrl: args?.imageUrl,
        password: passwordHash,
        state: args?.state ?? 'junior',
      });

      return newAdmin.toObject();
    },
    context,
    auth,
  );
