import singUpCustomer from './Mutation/singUpCustomer';
import singUpPerformer from './Mutation/singUpPerformer';
import confirmRegistration from './Mutation/confirmRegistration';
import forgotPassword from './Mutation/forgotPassword';
import confirmForgotPassword from './Mutation/confirmForgotPassword';

import finishLogin from './Query/finishLogin';
import startLogin from './Query/startLogin';

export default {
  Query: {
    finishLogin,
    startLogin,
  },
  Mutation: {
    singUpCustomer,
    singUpPerformer,
    confirmRegistration,
    forgotPassword,
    confirmForgotPassword,
  },
};
