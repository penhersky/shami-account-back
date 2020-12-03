import { Profile } from '../../../models';
import cather from '../../../wrappers/typeCather';
import { isAuthUserOrAdmin } from '../../../lib/checkAuth';

export default async (root: any, args: any, context: any) =>
  cather(
    async (user: any) => {
      if (typeof user !== 'string') return Profile.findOne({ user: root.id });
      return Profile.findOne({ user: root.id }).select(
        'id firstName lastName middleName location categoriesId',
      );
    },
    context,
    isAuthUserOrAdmin,
    false,
  );
