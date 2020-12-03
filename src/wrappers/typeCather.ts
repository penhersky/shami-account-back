export default async (
  type: (user?: any) => any,
  context?: any,
  auth?: (context: any) => object | string,
  fullCheck = true,
) => {
  try {
    if (auth) {
      const authResult = auth(context);
      if (typeof authResult === 'string') return fullCheck ? null : authResult;
      return type(authResult);
    }

    return type();
  } catch (error) {
    return null;
  }
};
