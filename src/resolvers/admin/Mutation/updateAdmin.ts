import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth, { highSecurityCheck } from '../../../lib/checkAuthAdmin';
import { logInfo } from '../../../lib/logger';

export default async (_: any, { id, admin: args }: any, context: any) =>
  cather(
    async (user: any) => {
      const admin = await Admin.findById(id);

      if (!admin) throw new Error('Such administrator does`t exist!');

      if (!(highSecurityCheck(user) || user?.id === admin.id))
        return new Error('Access denied!');

      const salt = await bcrypt.genSalt(10);

      const passwordHash =
        args?.password && (await bcrypt.hash(args?.password, salt));

      const updatedAdmin = await Admin.findByIdAndUpdate(
        admin?.id,
        {
          ...args,
          password: args?.password ? passwordHash : admin?.password,
        },
        { new: true },
      );

      logInfo(`❕ admin ${admin.name} updated by ${user?.name}`, args);

      return updatedAdmin;
    },
    context,
    auth,
  );
