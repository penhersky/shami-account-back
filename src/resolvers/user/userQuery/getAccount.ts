import { Admin, User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, args: any, context: any) =>
  cather(
    async (user: any) => {
      if (user.type === 'admin')
        return { admin: await Admin.findById(user.id) };
      return { user: await User.findById(user.id) };
    },
    context,
    auth,
  );
