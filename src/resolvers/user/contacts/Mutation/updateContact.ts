import { Contact } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';

export default async (_: any, { id, profile: args }: any, context: any) =>
  cather(
    async () => {
      const contact = await Contact.findById(id);

      if (!contact) throw new Error('Such contact does`t exist!');

      const updatedContact = await Contact.findByIdAndUpdate(args.id, args, {
        new: true,
      });

      return updatedContact;
    },
    context,
    auth,
  );
