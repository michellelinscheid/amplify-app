import { defineBackend } from '@aws-amplify/backend';
import { resendApiKey, contactApi } from './auth/resource.js';
import { data } from './data/resource.js';

defineBackend({
  contactApi,
  data,
});
