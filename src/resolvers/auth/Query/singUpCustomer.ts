import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { registration } from '../../../lib/validation';

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
      };

    const newUser = await User.create({
      type: 'customer',
      email: args.email,
      name: args.name,
      provider: 'email',
    });

    // send email

    return {
      result: 'SUCCESS',
    };
  });
