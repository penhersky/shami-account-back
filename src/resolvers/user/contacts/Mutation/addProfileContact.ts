import { Contact } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';

export default async (_: any, { contact }: any, context: any) =>
  cather(
    async (user: any) => {
      const newContact = await Contact.create({
        user: user.id,
        ...contact,
      });

      return newContact;
    },
    context,
    auth,
  );
