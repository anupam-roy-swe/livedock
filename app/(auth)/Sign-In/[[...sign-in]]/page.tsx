import { SignedIn } from '@clerk/nextjs';
import React from 'react';

const SignIn = () => {
  return (
    <main className='auth-page'>
      <SignedIn />
    </main>
  );
};

export default SignIn;
