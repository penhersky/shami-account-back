import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface LocationT extends mongoose.Document {
  user: string;
  name?: string;
  lat?: string;
  lng?: string;
}

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: false,
    },
    lat: {
      type: String,
      required: false,
    },
    lng: {
      type: String,
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

const Model: Account<LocationT> = mongoose.model<LocationT>(
  'Location',
  Schema,
) as Account<LocationT>;

export default Model;
