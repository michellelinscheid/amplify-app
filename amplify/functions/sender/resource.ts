import { defineFunction, secret } from '@aws-amplify/backend';

export const sayHello = defineFunction({
  name: 'sender',
  entry: './handler.ts',
  environment: {
    NAME: 'World',
    RESEND_API_KEY: secret("RESEND_API_KEY"),
  }
});

