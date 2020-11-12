import mongoose from 'mongoose';

export interface User extends mongoose.Document {
  name: string;
  email: string;
  imageId?: number;
  provider: string;
  type?: string;
  accountType?: string;
}

const UserModel = mongoose.model<User>(
  'User',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        indexes: true,
        unique: true,
      },
      imageId: {
        type: mongoose.Types.ObjectId,
        ref: 'Image',
        required: false,
      },
      provider: {
        type: String,
        allowNull: false,
      },
      type: {
        type: String,
        enum: ['customer', 'performer'],
        default: 'performer',
      },
      accountType: { type: mongoose.Schema.Types.ObjectId, ref: 'AccountType' },
    },
    {
      timestamps: true,
    },
  ),
);

export default UserModel;
