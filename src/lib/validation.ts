import * as Joi from 'joi';

const emailValidation = async (data: {
  email: String;
  password: string;
}): Promise<string | undefined> => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(50),
  });

  const result = schema.validate(data);
  return result.error ? result.error.details[0].message : undefined;
};

export default {
  login: emailValidation,
};
