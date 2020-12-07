import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface TAccountType extends mongoose.Document {
  user: string;
  status?: string;

  from?: string;
  to?: string;
}

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      required: false,
      default: 'default',
    },
    from: {
      type: Date,
      required: false,
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
);

Schema.plugin(mongoosePaginate);

interface Account<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Account<TAccountType> = mongoose.model<TAccountType>(
  'AccountType',
  Schema,
) as Account<TAccountType>;

export default Model;
