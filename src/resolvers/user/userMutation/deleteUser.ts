import {
  User,
  AccountType,
  Profile,
  Security,
  Contact,
  Image,
} from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';
import { logInfo } from '../../../lib/logger';

export default async (_: any, args: any, context: any) =>
  cather(
    async (authUser: any) => {
      const user = await User.findById(args.id);

      if (!user) throw new Error('Such user does not exist');

      if (authUser.type !== 'admin' && user?.id !== authUser.id)
        throw new Error('Access denied!');

      await user?.deleteOne();

      if (user.active) {
        await AccountType.deleteOne({ user: user?.id });

        await Security.deleteOne({ user: user?.id });

        const profile = await Profile.findByIdAndDelete({ user: user?.id });

        await Contact.deleteMany({ profile: profile?.id });
        await Image.deleteMany({ user: user?.id });
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
