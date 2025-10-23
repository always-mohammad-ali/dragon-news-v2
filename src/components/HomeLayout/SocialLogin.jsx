import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold mb-5'>Login With</h2>
            <div className='flex flex-col gap-3'>
                <button className='btn btn-outline btn-success w-full'><FcGoogle size={20} /> Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub size={20} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;