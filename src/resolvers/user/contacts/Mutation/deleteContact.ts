import { Contact } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';

export default async (_: any, args: any, context: any) =>
  cather(
    async (user: any) => {
      const contact = await Contact.findById(args.id);

      if (!contact) throw new Error('Bad request!');

      if (user.profileId === contact?.profile)
        throw new Error('Access denied!');

      await contact?.deleteOne();

      return {
        result: 'SUCCESS',
        message: 'Contact deleted successful!',
      };
    },
    context,
    auth,
  );
