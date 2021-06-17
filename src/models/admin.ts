import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface AdminType extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  imageUrl?: string;
  state?: string;
}

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      indexes: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      indexes: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: false,
      default: 'moderator',
    },
  },
  {
    timestamps: true,
  },
);

Schema.plugin(mongoosePaginate);

interface Admin<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Admin<AdminType> = mongoose.model<AdminType>(
  'Admin',
  Schema,
) as Admin<AdminType>;

export default Model;
