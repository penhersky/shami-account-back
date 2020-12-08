import { Contact } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () =>
      Contact.findById(args.id).select(
        'id profile show name value icon createdAt updatedAt',
      ),
    context,
    auth,
  );
