import Sequelize from 'sequelize';
import sequelize from '../database';

export class User extends Sequelize.Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public imageId!: string;

  public provider!: string;

  public type!: string;
}

type UserType = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): User;
};

const UserModel = <UserType>sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new Sequelize.DataTypes.STRING(64),
      allowNull: false,
    },
    email: {
      type: new Sequelize.DataTypes.STRING(48),
      allowNull: false,
      unique: true,
    },
    imageId: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    provider: {
      type: new Sequelize.DataTypes.STRING(24),
      allowNull: false,
    },
    type: {
      type: new Sequelize.DataTypes.ENUM(...['customer', 'performer']),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['id'],
      },
      {
        unique: true,
        fields: ['email'],
      },
      {
        name: 'customer_type',
        fields: ['type'],
        where: {
          type: 'customer',
        },
      },
      {
        name: 'performer_type',
        fields: ['type'],
        where: {
          type: 'performer',
        },
      },
    ],
  },
);

export default UserModel;
