import { logError } from '../lib/logger';

export default async (
  resolver: (user?: any) => any,
  context?: any,
  auth?: (context: any) => object | string,
  fullCheck = true,
) => {
  try {
    if (auth) {
      const authResult = auth(context);
      if (typeof authResult === 'string') {
        if (fullCheck) throw new Error('Access denied');
        return await resolver();
      }
      return await resolver(authResult);
    }

    return await resolver();
  } catch (error) {
    if (error.message === 'Access denied') return error;
    logError(error.message, {
      name: error?.name,
      stack: error?.stack,
    });
    return Error('Server error');
  }
};
