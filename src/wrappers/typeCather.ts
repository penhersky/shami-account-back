import { logError } from '../lib/logger';

export default async (
  type: (user?: any) => any,
  context?: any,
  auth?: (context: any) => object | string,
  fullCheck = true,
) => {
  try {
    if (auth) {
      if (auth) {
        const authResult = auth(context);
        if (typeof authResult === 'string') {
          if (fullCheck) return null;
          return await type();
        }
        return await type(authResult);
      }
      return await type();
    }

    return await type();
  } catch (error) {
    logError(error.message, {
      name: error?.name,
      stack: error?.stack,
    });
    return null;
  }
};
