import { logError } from '../lib/logger';

export default async (
  resolver: (user?: any) => any,
  context?: any,
  auth?: (context: any) => object | string,
) => {
  try {
    if (auth) {
      const authResult = auth(context);
      if (typeof authResult === 'string') throw new Error('Access denied');
      return resolver(authResult);
    }

    return resolver();
  } catch (error) {
    logError(error?.message || 'Server Error');
    return error;
  }
};
