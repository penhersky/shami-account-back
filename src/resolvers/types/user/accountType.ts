import { AccountType } from '../../../models';
import cather from '../../../wrappers/typeCather';
import auth from '../../../lib/checkAuth';

export default async (root: any, args: any, context: any) =>
  cather(
    async () => {
      return AccountType.findOne({ user: root.id });
    },
    context,
    auth,
  );
