import * as React from 'react';

export function EmailTemplate({ firstName, lastName, message, email }) {
  return (
    <div>
      <h1>New message from {firstName} {lastName}</h1>
      <p>{message}</p>
      <p>Reply to: {email}</p>
    </div>
  );
}


