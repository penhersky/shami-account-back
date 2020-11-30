import Joi from 'joi';

const validation = async (data: {
  name: string;
  email: string;
  password: string;
}): Promise<undefined | Joi.ValidationErrorItem[]> => {
  const schema = Joi.object({
    name: Joi.string()
      .pattern(new RegExp('^[A-Za-zА-Яа-я]'))
      .min(2)
      .max(60)
      .required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string()
      .min(6)
      .max(30)
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

export default validation;
