import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      const admin = await Admin.findById(args.id).select(
        'id name email imageUrl state createdAt updatedAt',
      );

      return admin;
    },
    context,
    auth,
  );
