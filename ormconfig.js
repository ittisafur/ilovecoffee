module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'undefined',
  password: 'password',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
}
