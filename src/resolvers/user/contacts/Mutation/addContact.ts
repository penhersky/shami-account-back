import { Contact, User } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { user: id, contact }: any, context: any) =>
  cather(
    async () => {
      const profile = await User.findById(id);
      if (!profile) return new Error('Bad Request');

      const newContact = await Contact.create({
        user: profile.id,
        ...contact,
      });

      return newContact;
    },
    context,
    auth,
  );
