import { Profile } from '../../../models';
import cather from '../../../wrappers/typeCather';
import { isAuthUserOrAdmin } from '../../../lib/checkAuth';
import select from '../../../lib/select';

export default async (root: any, args: any, context: any) =>
  cather(
    async (user: any) => {
      if (typeof user !== 'string') return Profile.findOne({ user: root.id });
      return Profile.findOne({ user: root.id }).select(select.simpleProfile);
    },
    context,
    isAuthUserOrAdmin,
    false,
  );
