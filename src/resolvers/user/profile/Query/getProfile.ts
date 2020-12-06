import { Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () =>
      Profile.findById(args.id).select(
        'id user firstName lastName middleName location description birthday categoriesId createdAt updatedAt',
      ),

    context,
    auth,
  );
