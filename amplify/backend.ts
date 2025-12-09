import { defineBackend } from '@aws-amplify/backend';
import { sayHello } from './functions/sender/resource';

export const backend = defineBackend({
  sayHello,
});
