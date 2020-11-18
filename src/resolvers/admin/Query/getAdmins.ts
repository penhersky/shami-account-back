import { Admin } from '../../../models';
import { logError } from '../../../lib/logger';

export default async () => {
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
    logError(error);
    return { result: 'ERROR', message: 'Server Error' };
  }
};
