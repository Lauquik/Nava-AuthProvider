import React, { useState } from 'react';

interface VerifyProps {
    username: string;
    redirectUri: string;
}

const Verify: React.FC<VerifyProps> = (props) => {
    const [otp, setOtp] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleVerify = () => {
        const verificationCode = '123456';
        const token = "thistokenwilgeneratebyapi"
        const endpoint = import.meta.env.VITE_APIENDPOINT; 
        if (otp === verificationCode) {
            setError('');
            window.location.href = `${props.redirectUri}?token=${token}&apiendpoint=${endpoint}`;
        } else {
            setError('Invalid OTP. Please retry.')
            setOtp('')
            console.log('Invalid OTP');
        }
    };


    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className='text-2xl my-8 text-center'>Nava 2-Factor Authentication</h1>
            <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
                <h2 className="text-2xl mb-4">Verification</h2>
                <form>
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                            Enter OTP:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="otp"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter the 6-digit OTP"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleVerify}
                        >
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}


export default Verify;