import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth, { highSecurityCheck } from '../../../lib/checkAuthAdmin';
import { logInfo } from '../../../lib/logger';

export default async (_: any, args: any, context: any) =>
  cather(
    async (user: any) => {
      const admin = await Admin.findById(args?.id);

      if (!admin) throw new Error('Such administrator does`t exist!');

      if (!(highSecurityCheck(user) || user?.id === admin.id))
        return new Error('Access denied!');

      await admin.deleteOne();

      logInfo(`❗️🗑 deleted admin ${admin.name} by ${user?.name}`);

      return {
        result: 'SUCCESS',
        message: 'Administrator deleted successful!',
      };
    },
    context,
    auth,
  );
