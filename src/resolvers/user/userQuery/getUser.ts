import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';

export default async (_: any, args: any) =>
  cather(async () =>
    User.findById(args.id).select(
      'id name email imageUrl type createdAt updatedAt',
    ),
  );
