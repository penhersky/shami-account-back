import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';

import sendEmail from '../../../lib/sendEmail';
import { forgotPassword } from '../../../lib/emailMessage';

import getCode from '../../../lib/createAuthCode';
import { createTempToken } from '../../../lib/token';
import { USER_TOKEN_SECURITY_KEY } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const user = await User.findOne({ email: args.email });

    if (!user || !user.active)
      return {
        result: 'ERROR',
        status: 42,
        message: 'User does not exist or is not activated',
      };

    const { code, hash } = await getCode();

    const { forTitle, html, object } = forgotPassword(code);
    await sendEmail(forTitle, object, html, [user.email]);

    const token = createTempToken(
      { userId: user?.id, code: hash },
      String(USER_TOKEN_SECURITY_KEY),
    );

    return {
      result: 'SUCCESS',
      status: 10,
      token,
      redirectTo: '/forgot/password/step2',
      message: 'Registration was successful!',
    };
  });
