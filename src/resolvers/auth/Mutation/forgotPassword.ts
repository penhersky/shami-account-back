import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';

import sendEmail from '../../../lib/sendEmail';
import { forgotPassword } from '../../../lib/emailMessage';

export default async (_: any, args: any) =>
  cather(async () => {
    const user = await User.findOne({ email: args.email });

    if (!user || !user.active)
      return {
        result: 'ERROR',
        status: 42,
        message: 'User does not exist or is not activated',
      };

    const { forTitle, html, object } = forgotPassword(user.id);
    await sendEmail(forTitle, object, html, [user.email]);

    return {
      result: 'SUCCESS',
      status: 10,
      redirectTo: '/forgot/password/step2',
      message: 'Registration was successful!',
    };
  });
