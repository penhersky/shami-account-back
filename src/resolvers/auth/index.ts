import singUpCustomer from './Mutation/singUpCustomer';
import singUpPerformer from './Mutation/singUpPerformer';
import confirmRegistration from './Mutation/confirmRegistration';
import forgotPassword from './Mutation/forgotPassword';
import confirmForgotPassword from './Mutation/confirmForgotPassword';

export default {
  Query: {},
  Mutation: {
    singUpCustomer,
    singUpPerformer,
    confirmRegistration,
    forgotPassword,
    confirmForgotPassword,
  },
};
