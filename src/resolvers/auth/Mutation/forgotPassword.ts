import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';

import sendEmail from '../../../lib/sendEmail';
import { forgotPassword } from '../../../lib/emailMessage';

export default async (_: any, args: any) =>
  cather(async () => {
    const user = await User.findOne({ email: args.email });

    if (!user || user.active)
      return new Error('User does not exist or is not activated');

    const { forTitle, html, object } = forgotPassword(user.id);
    await sendEmail(forTitle, object, html, [user.email]);

    return {
      result: 'SUCCESS',
      redirectTo: '/forgot/password/step2',
      message: 'Registration was successful!',
    };
  });
