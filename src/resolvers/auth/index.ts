import singUpCustomer from './Mutation/singUpCustomer';
import singUpPerformer from './Mutation/singUpPerformer';
import confirmRegistration from './Mutation/confirmRegistration';
import forgotPassword from './Mutation/forgotPassword';
import confirmForgotPassword from './Mutation/confirmForgotPassword';

import login from './Query/login';
import _getSingUpUsersByInterval from './Query/_getSingUpUsersByInterval';

export default {
  Query: {
    _getSingUpUsersByInterval,
    login,
  },
  Mutation: {
    singUpCustomer,
    singUpPerformer,
    confirmRegistration,
    forgotPassword,
    confirmForgotPassword,
  },
};
