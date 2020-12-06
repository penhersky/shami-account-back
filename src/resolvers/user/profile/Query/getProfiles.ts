import { Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { paginate }: any, context: any) =>
  cather(
    async () => {
      const profile = await Profile.paginate(
        {},
        {
          limit: paginate.limit,
          page: paginate.page,
          select:
            'id user firstName lastName middleName location description birthday categoriesId createdAt updatedAt',
          sort: { [paginate.sortKey]: paginate?.sort === 'ASC' ? 1 : -1 },
        },
      );

      return {
        result: 'SUCCESS',
        totalItems: profile.totalDocs,
        page: profile.page,
        limit: profile.limit,
        totalPages: profile.totalPages,
        profiles: profile.docs,
      };
    },
    context,
    auth,
  );
