import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      const admins = await Admin.find({})
        .select('id name email imageUrl state createdAt updatedAt')
        .sort({ createdAt: -1 });

      return {
        result: 'SUCCESS',
        admins,
        count: admins?.length,
      };
    },
    context,
    auth,
  );
