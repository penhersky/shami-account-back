import mongoose from 'mongoose';

export interface AccountType extends mongoose.Document {
  user: string;
  status?: string;

  from?: string;
  to?: string;
}

const Account = mongoose.model<AccountType>(
  'AccountType',
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
      status: {
        type: String,
        default: 'default',
      },
      from: {
        type: Date,
        default: Date.now,
      },
      to: {
        type: Date,
        required: false,
      },
    },
    {
      timestamps: true,
    },
  ),
);

export default Account;
