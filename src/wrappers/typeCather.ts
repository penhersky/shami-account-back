import { logError } from '../lib/logger';

export default async (
  type: (user?: any) => any,
  context?: any,
  auth?: (context: any) => object | string,
  fullCheck = true,
) => {
  try {
    if (auth) {
      const authResult = auth(context);
      if (typeof authResult === 'string') {
        if (fullCheck) return null;
        const res = type(authResult);
        if (res instanceof Error) throw new Error(res.message);
        return res;
      }
    }

    const res = type();
    if (res instanceof Error) throw new Error(res.message);
    return res;
  } catch (error) {
    logError(error.message, { error });
    return null;
  }
};
