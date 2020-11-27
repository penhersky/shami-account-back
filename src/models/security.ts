import mongoose from 'mongoose';

export interface Security extends mongoose.Document {
  user: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

const SecurityModel = mongoose.model<Security>(
  'Security',
  new mongoose.Schema(
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
  ),
);

export default SecurityModel;
