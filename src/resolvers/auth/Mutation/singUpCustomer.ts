import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { registration } from '../../../lib/validation';
import sendEmail from '../../../lib/sendEmail';
import { singUp } from '../../../lib/emailMessage';
import getCode from '../../../lib/createAuthCode';
import { createTempToken } from '../../../lib/token';
import { USER_TOKEN_SECURITY_KEY } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const validationErr = await registration.user({
      name: args.name,
      email: args.email,
    });
    if (validationErr)
      return {
        result: 'ERROR',
        message: validationErr[0].message,
        value: validationErr[0].context?.value,
        status: 45,
        fields: validationErr[0].path,
      };

    const birthday = new Date(args.birthday);
    const date = new Date();
    date.setMonth(date.getMonth() - 12 * 16);
    if (Number(birthday) > Number(date))
      return {
        result: 'ERROR',
        status: 48,
        fields: ['date'],
      };

    const user = await User.findOne({ email: args?.email });
    if (user && user.active)
      return {
        result: 'ERROR',
        message: 'User with this email already exists',
        status: 44,
        fields: ['email'],
        redirectTo: '/singIn/step1',
      };

    const newUser =
      user ??
      (await User.create({
        type: 'customer',
        email: args.email,
        birthday: String(birthday),
        name: args.name,
        provider: 'email',
      }));

    const { code, hash } = await getCode();
    const { forTitle, html, object } = singUp('customer', code);
    await sendEmail(forTitle, object, html, [newUser.email]);

    const token = createTempToken(
      { userId: newUser?.id, code: hash },
      String(USER_TOKEN_SECURITY_KEY),
    );

    return {
      result: 'SUCCESS',
      token,
      redirectTo: '/singUp/step2',
      status: 20,
      message: 'An email with a verified link has been sent',
    };
  });
