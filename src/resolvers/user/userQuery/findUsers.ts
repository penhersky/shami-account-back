import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      const users = await User.paginate({
        type: args?.type,
        deleted: false,
        $text: { $search: args.search },
      });
      return {
        result: 'SUCCESS',
        totalItems: users.totalDocs,
        page: users.page,
        limit: users.limit,
        totalPages: users.totalPages,
        users: users.docs,
      };
    },
    context,
    auth,
  );
