import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface SecurityT extends mongoose.Document {
  user: string;
  password: string;
  accessToken?: string;
  refreshToken?: string;
}

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    password: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      required: false,
    },
    refreshToken: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

Schema.plugin(mongoosePaginate);
interface Security<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Security<SecurityT> = mongoose.model<SecurityT>(
  'Security',
  Schema,
) as Security<SecurityT>;

export default Model;
