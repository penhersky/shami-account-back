import { User, Security } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      const user = await User.findById(args.id).select(
        'id name email imageUrl type createdAt updatedAt',
      );
      const security = await Security.findOne({ user: user?.id });

      return {
        user,
        security,
      };
    },
    context,
    auth,
  );
