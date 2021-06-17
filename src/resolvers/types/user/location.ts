import { Location } from '../../../models';
import cather from '../../../wrappers/typeCather';
import auth from '../../../lib/checkAuth';

export default async (root: any, args: any, context: any) =>
  cather(
    async () => {
      return Location.findOne({ user: root.id });
    },
    context,
    auth,
  );
