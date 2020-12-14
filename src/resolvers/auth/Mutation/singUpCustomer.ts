import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { registration } from '../../../lib/validation';
import sendEmail from '../../../lib/sendEmail';
import { singUp } from '../../../lib/emailMessage';

export default async (_: any, args: any) =>
  cather(async () => {
    const validationErr = await registration.user(args);
    if (validationErr)
      return {
        result: 'ERROR',
        message: validationErr[0].message,
        value: validationErr[0].context?.value,
        key: `${validationErr[0].context?.key}-error`,
        fields: validationErr[0].path,
      };

    const user = await User.findOne({ email: args?.email });
    if (user && user.active)
      return {
        result: 'ERROR',
        message: 'User with this email already exists',
        key: 'email-exist',
        fields: ['email'],
        redirectTo: '/singIn/step1',
      };

    const newUser =
      user ??
      (await User.create({
        type: 'customer',
        email: args.email,
        name: args.name,
        provider: 'email',
      }));

    const { forTitle, html, object } = singUp(newUser.id, 'customer');
    await sendEmail(forTitle, object, html, [newUser.email]);

    return {
      result: 'SUCCESS',
      redirectTo: '/singUp/step2',
      message: 'An email with a verified link has been sent',
    };
  });
