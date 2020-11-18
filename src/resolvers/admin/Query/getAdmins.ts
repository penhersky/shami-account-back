import { Admin } from '../../../models';
import cather from '../../../wrappers/cather';

export default async () =>
  cather(async () => {
    try {
      const admins = await Admin.find({})
        .select('id name email imageUrl state createdAt updatedAt')
        .sort({ createdAt: -1 });

      return {
        result: 'SUCCESS',
        admins,
        count: admins?.length,
      };
    } catch (error) {
      return { result: 'ERROR', message: 'Server Error' };
    }
  });
