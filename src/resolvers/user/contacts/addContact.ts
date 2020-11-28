import { Contact, Profile } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, { contact }: any, context: any) =>
  cather(
    async (user: any) => {
      const profile = await Profile.findOne({ user: user.id });
      if (!profile) return new Error('Bad Request');

      const newContact = await Contact.create({
        profile: profile.id,
        ...contact,
      });

      return newContact;
    },
    context,
    auth,
  );
