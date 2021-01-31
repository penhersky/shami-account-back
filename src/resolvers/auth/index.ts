import singUpCustomer from './Mutation/singUpCustomer';
import singUpPerformer from './Mutation/singUpPerformer';
import confirmRegistration from './Mutation/confirmRegistration';
import forgotPassword from './Mutation/forgotPassword';
import confirmForgotPassword from './Mutation/confirmForgotPassword';
import verifyCode from './Query/verifyCode';

import login from './Query/login';
import _getSingUpUsersByInterval from './Query/_getSingUpUsersByInterval';

export default {
  Query: {
    _getSingUpUsersByInterval,
    login,
    verifyCode,
  },
  Mutation: {
    singUpCustomer,
    singUpPerformer,
    confirmRegistration,
    forgotPassword,
    confirmForgotPassword,
  },
};
