import { Location } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { paginate }: any, context: any) =>
  cather(
    async () => {
      const locations = await Location.paginate(
        {},
        {
          limit: paginate.limit,
          page: paginate.page,
          select: 'id profile name lat lng createdAt updatedAt',
          sort: { [paginate.sortKey]: paginate?.sort === 'ASC' ? 1 : -1 },
        },
      );

      return {
        result: 'SUCCESS',
        totalItems: locations.totalDocs,
        page: locations.page,
        limit: locations.limit,
        totalPages: locations.totalPages,
        locations: locations.docs,
      };
    },
    context,
    auth,
  );
