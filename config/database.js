module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-44-194-6-121.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd1le0kldhq69vf'),
        username: env('DATABASE_USERNAME', 'udzhzhvzgjbqjc'),
        password: env('DATABASE_PASSWORD', '8135c5b33d72388ef6fa89b8e68eb913bcc2530de8494ac3ce7c1f0426e2fd0f'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {},
    },
  },
});