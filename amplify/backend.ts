import { defineBackend } from '@aws-amplify/backend';
// import { data } from './data/resource.js';
import { sayHello } from './functions/sender/resource';

export const backend = defineBackend({
  sayHello,
  // resendApiKey: secret('RESEND_API_KEY')
});
