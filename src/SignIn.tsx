import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Verify from './Verify';

const SignIn: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSignInSuccess, setSignInSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const redirectUri = searchParams.get('redirecturi') || '';
    const clientId = searchParams.get('clientid') || '';

    const handleSignIn = () => {
        if (email === 'admin' && password === 'admin' && clientId === '1234567890') {
            setSignInSuccess(true);
            setError('');
            alert('Sign in successful')
        } else {
            setError('Invalid credentials. Please retry.')
            console.log('Invalid credentials');
        }
    };

    if (isSignInSuccess) {
        return (
            <Verify redirectUri={redirectUri} username={email} />
        );
    }

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center">
                <h1 className='text-2xl my-8 text-center'>Nava-Assist 2 Factor Authentication</h1>
                <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
                    <h2 className="text-2xl mb-4">Sign In</h2>
                    <form>
                        <p className="text-red-500 text-sm mb-4">{error}</p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleSignIn}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <p className="text-sm pt-3">
                        Don't have an account?{' '}
                        <Link
                            to={`/signup?redirecturi=${encodeURIComponent(redirectUri)}&clientid=${encodeURIComponent(clientId)}`}
                            className="text-blue-500 hover:underline">
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </>

    );
};

export default SignIn;
