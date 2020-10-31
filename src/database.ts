import { Sequelize } from 'sequelize';

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER_NAME } from './config';

const sequelize: Sequelize = new Sequelize(
  String(DB_NAME),
  String(DB_USER_NAME),
  String(DB_PASSWORD),
  {
    host: DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

export default sequelize;
