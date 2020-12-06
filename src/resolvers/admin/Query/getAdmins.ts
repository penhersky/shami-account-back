import { Admin } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuthAdmin';

export default async (_: any, { paginate }: any, context: any) =>
  cather(
    async () => {
      const admins = await Admin.paginate(
        {},
        {
          limit: paginate.limit,
          page: paginate.page,
          select: 'id name email imageUrl state createdAt updatedAt',
          sort: { [paginate.sortKey]: paginate?.sort === 'ASC' ? 1 : -1 },
        },
      );

      return {
        result: 'SUCCESS',
        totalItems: admins.totalDocs,
        page: admins.page,
        limit: admins.limit,
        totalPages: admins.totalPages,
        admins: admins.docs,
      };
    },
    context,
    auth,
  );
