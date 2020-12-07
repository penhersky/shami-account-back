import { Security } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { paginate }: any, context: any) =>
  cather(
    async () => {
      const security = await Security.paginate(
        {},
        {
          limit: paginate.limit,
          page: paginate.page,
          select: 'id user accessToken refreshToken createdAt updatedAt',
          sort: { [paginate.sortKey]: paginate?.sort === 'ASC' ? 1 : -1 },
        },
      );

      return {
        result: 'SUCCESS',
        totalItems: security.totalDocs,
        page: security.page,
        limit: security.limit,
        totalPages: security.totalPages,
        security: security.docs,
      };
    },
    context,
    auth,
  );
