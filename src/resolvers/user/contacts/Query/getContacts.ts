import { Contact } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { paginate }: any, context: any) =>
  cather(
    async () => {
      const contacts = await Contact.paginate(
        {},
        {
          limit: paginate.limit,
          page: paginate.page,
          select: 'id profile show name value icon createdAt updatedAt',
          sort: { [paginate.sortKey]: paginate?.sort === 'ASC' ? 1 : -1 },
        },
      );

      return {
        result: 'SUCCESS',
        totalItems: contacts.totalDocs,
        page: contacts.page,
        limit: contacts.limit,
        totalPages: contacts.totalPages,
        security: contacts.docs,
      };
    },
    context,
    auth,
  );
