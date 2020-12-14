import { AccountType } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { paginate }: any, context: any) =>
  cather(
    async () => {
      const accounts = await AccountType.paginate(
        {},
        {
          limit: paginate.limit,
          page: paginate.page,
          sort: { [paginate.sortKey]: paginate?.sort === 'ASC' ? 1 : -1 },
        },
      );

      return {
        result: 'SUCCESS',
        totalItems: accounts.totalDocs,
        page: accounts.page,
        limit: accounts.limit,
        totalPages: accounts.totalPages,
        accounttypes: accounts.docs,
      };
    },
    context,
    auth,
  );
