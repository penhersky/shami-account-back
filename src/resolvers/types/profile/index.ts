import { Contact, Location } from '../../../models';
import cather from '../../../wrappers/typeCather';
import auth from '../../../lib/checkAuth';

export default {
  location: async (root: any) => Location.findOne({ profile: root.id }),

  contacts: async (root: any, args: any, context: any) =>
    cather(
      async (user: any) => {
        const contacts = await Contact.find({ profile: root.id });
        return root?.user === user?.id || user?.type === 'admin'
          ? contacts
          : contacts.filter((contact) => contact.show);
      },
      context,
      auth,
    ),
};
