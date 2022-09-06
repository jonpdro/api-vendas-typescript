import { DataSourceOptions } from 'typeorm';

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'apivendas',
  migrations: ['src/shared/typeorm/migrations/*.ts'],
};

export default ormconfig;
