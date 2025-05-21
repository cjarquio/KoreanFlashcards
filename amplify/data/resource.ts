import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { schema as generatedSqlSchema } from './schema.sql';


// Add a global authorization rule
const sqlSchema = generatedSqlSchema.authorization(allow => [allow.publicApiKey()])


export type Schema = ClientSchema<typeof sqlSchema>;

export const data = defineData({
  schema: sqlSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 120 }
  }
});