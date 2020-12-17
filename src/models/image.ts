import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface ImageT extends mongoose.Document {
  user: string;
  Etag: string;
  Key: string;
  Location: string;
  active?: Boolean;
}

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    Etag: {
      type: String,
      required: true,
    },
    Key: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

Schema.plugin(mongoosePaginate);

interface Image<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Image<ImageT> = mongoose.model<ImageT>(
  'Image',
  Schema,
) as Image<ImageT>;

export default Model;
