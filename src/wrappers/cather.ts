import { logError } from '../lib/logger';

export default async (
  resolver: () => any,
  context?: any,
  auth?: (context: any) => null | string,
) => {
  try {
    if (auth) {
      const authResult = auth(context);
      if (typeof authResult === 'string') throw new Error('Access denied');
    }

    return resolver();
  } catch (error) {
    logError(error);
    return error;
  }
};
