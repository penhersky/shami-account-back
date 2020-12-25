import {
  User,
  AccountType,
  Security,
  Contact,
  Image,
  Location,
} from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';
import { logInfo } from '../../../lib/logger';

export default async (_: any, args: any, context: any) =>
  cather(
    async (authUser: any) => {
      const user = await User.findById(args.id);

      if (!user) throw new Error('Such user does not exist');

      if (authUser?.type !== 'admin' && user?.id !== authUser?.id)
        throw new Error('Access denied!');

      await user.deleteOne();

      if (user.active) {
        await AccountType.deleteOne({ user: user?.id });

        await Security.deleteOne({ user: user?.id });

        await Contact.deleteMany({ user: user?.id });
        await Image.deleteMany({ user: user?.id });
        await Location.deleteMany({ user: user?.id });
      }

      logInfo(`❗️🗑 deleted user ${user?.email} by ${authUser?.email}`);

      return {
        result: 'SUCCESS',
        message: 'User deleted successful!',
      };
    },
    context,
    auth,
  );
