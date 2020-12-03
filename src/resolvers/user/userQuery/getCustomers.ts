import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, { paginate }: any, context: any) =>
  cather(
    async () => {
      const customers = await User.paginate(
        { type: 'customer' },
        {
          limit: paginate.limit,
          page: paginate.page,
          select: 'id name email imageUrl type createdAt updatedAt',
          sort: { [paginate.sortKey]: paginate?.sort === 'ASC' ? 1 : -1 },
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
