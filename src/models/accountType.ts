import mongoose from 'mongoose';

export interface AccountType extends mongoose.Document {
  user: number;
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
        enum: ['default', 'group', 'leader', 'premium', 'ban'],
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
