import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sayHello } from './functions/sender/resource';

export const backend = defineBackend({
  auth,
  data,
  sayHello,
});
