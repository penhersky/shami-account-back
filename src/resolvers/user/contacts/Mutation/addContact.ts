import { Contact, Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { profile: id, contact }: any, context: any) =>
  cather(
    async () => {
      const profile = await Profile.findById(id);
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
