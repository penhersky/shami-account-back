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
      const res = await resolver(authResult);
      if (res instanceof Error) throw new Error(res.message);
      return res;
    }

    const res = await resolver();
    if (res instanceof Error) throw new Error(res.message);
    return res;
  } catch (error) {
    logError(error.message, { error });
    return error;
  }
};
