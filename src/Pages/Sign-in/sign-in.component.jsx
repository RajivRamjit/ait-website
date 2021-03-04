import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => (
    <div className='sign-in-content'>
        <h1>Sign In Page</h1>
        <button onClick={signInWithGoogle}>Google Sign In</button>
    </div>
);
export default SignIn;