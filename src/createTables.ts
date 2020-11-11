import 'dotenv-flow/config';
import sequelize from './database';
import { User } from './models';

(async () => {
  sequelize
    .authenticate()
    .then(() => console.log('Connected to mySql!'))
    .catch((error: string) => console.log(error));
  await User.sync({ force: true });
})();
