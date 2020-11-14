import mongoose from 'mongoose';

export interface Admin extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  imageUrl?: string;
  state?: string;
}

const AdminModel = mongoose.model<Admin>(
  'Admin',
  new mongoose.Schema(
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
        allowNull: true,
      },
      password: {
        type: String,
        allowNull: false,
      },
      state: {
        type: String,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);

export default AdminModel;
