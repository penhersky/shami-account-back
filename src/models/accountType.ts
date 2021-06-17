import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface TAccountType extends mongoose.Document {
  user: string;
  status: string;
  active?: boolean;
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
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: true,
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

Schema.index({ '$**': 'text' });

interface Account<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Account<TAccountType> = mongoose.model<TAccountType>(
  'AccountType',
  Schema,
) as Account<TAccountType>;

export default Model;
