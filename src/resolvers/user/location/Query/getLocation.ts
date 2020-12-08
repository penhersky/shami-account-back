import { Location } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () =>
      Location.findById(args.id).select(
        'id profile name lat lng createdAt updatedAt',
      ),
    context,
    auth,
  );
