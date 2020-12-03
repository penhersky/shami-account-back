import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      const customers = await User.paginate(
        { type: 'customer' },
        {
          limit: args.limit,
          page: args.page,
          select: 'id name email imageUrl type createdAt updatedAt',
          sort: { [args.sortKey]: args?.sort === 'ASC' ? 1 : -1 },
        },
      );

      return {
        result: 'SUCCESS',
        totalItems: customers.totalDocs,
        page: customers.page,
        limit: customers.limit,
        totalPages: customers.totalPages,
        customers: customers.docs,
      };
    },
    context,
    auth,
  );
