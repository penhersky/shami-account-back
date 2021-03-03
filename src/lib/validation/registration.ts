import Joi from 'joi';

const user = async ({
  name,
  email,
}: {
  name: string;
  email: string;
}): Promise<undefined | Joi.ValidationErrorItem[]> => {
  const schema = Joi.object({
    name: Joi.string()
      .pattern(new RegExp('^[A-Za-zА-Яа-я]'))
      .min(3)
      .max(60)
      .required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  });

  const result = schema.validate({ name, email });
  return result.error ? result.error.details : undefined;
};

const password = async (data: {
  password: string;
}): Promise<undefined | Joi.ValidationErrorItem[]> => {
  const schema = Joi.object({
    password: Joi.string()
      .min(6)
      .max(60)
      .pattern(
        new RegExp(
          '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        ),
      )
      .required(),
  });

  const result = schema.validate(data);
  return result.error ? result.error.details : undefined;
};

export default {
  password,
  user,
};
