import { AccountType } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () =>
      AccountType.findById(args.id).select(
        'id user status from to createdAt updatedAt',
      ),
    context,
    auth,
  );