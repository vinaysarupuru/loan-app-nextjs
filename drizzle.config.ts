import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
} satisfies Config;