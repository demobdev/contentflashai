module.exports = {
  connectionString: process.env.DATABASE_URL,
  schemaPath: './utils/db/schema.ts',
  migrationsPath: './migrations',
};

