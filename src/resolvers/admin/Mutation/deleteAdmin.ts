import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth, { highSecurityCheck } from '../../../lib/checkAuthAdmin';
import { logInfo } from '../../../lib/logger';

export default async (_: any, args: any, context: any) =>
  cather(
    async (user: any) => {
      if (!highSecurityCheck(user)) return new Error('Access denied!');

      await Admin.deleteMany({
        _id: {
          $in: args?.idArr,
        },
      });

      logInfo(`❗️🗑 deleted admins ${args?.idArr} by ${user?.name}`);

      return {
        result: 'SUCCESS',
        message: 'Administrators deleted successful!',
      };
    },
    context,
    auth,
  );
