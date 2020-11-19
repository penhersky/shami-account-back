import jwt from 'jsonwebtoken';

import { ADMIN_TOKEN_SECURITY_KEY } from '../config';

export default (context: any) => {
  try {
    return jwt.verify(
      context?.req?.headers['X-admin-security-token-X'],
      String(ADMIN_TOKEN_SECURITY_KEY),
    );
  } catch (error) {
    return 'Access denied';
  }
};
