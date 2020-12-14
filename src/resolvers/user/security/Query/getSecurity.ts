import { Security } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () =>
      Security.findById(args.id).select(
        'id user accessToken refreshToken createdAt updatedAt',
      ),
    context,
    auth,
  );