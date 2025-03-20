import { useState } from 'react';
import { UserService } from '../../services/user.service';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!UserService.isEmailValid(value)) {
      setError('Invalid email');
    } else {
      setError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!UserService.isPasswordValid(value)) {
      setError('Password must be at least 6 characters');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!UserService.isEmailValid(email)) {
      setError('Invalid email');
      return;
    }

    if (!UserService.isPasswordValid(password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    console.log(import.meta.env);

    UserService.login(email, password).then((success) => {});
  };

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-primary flex-col'>
      <h1 className='text-3xl text-center text-gray-300 mb-10'>Agilehub</h1>

      <div>
        <form
          className='default-container min-w-72 w-72 min-h-64 mb-6 p-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label className='text-sm ' htmlFor='email'>
              Email
            </label>
            <input
              onChange={handleEmailChange}
              value={email}
              type='email'
              name='email'
              className='w-full border-gray-300 border rounded-lg p-1 mt-2'
            />
          </div>

          <div>
            <div className='flex justify-between items-center'>
              <label className='text-sm ' htmlFor='password'>
                Password
              </label>

              <span className='text-[10px] hover:underline cursor-pointer hover:text-blue-500 duration-100'>
                Forgot password?
              </span>
            </div>
            <input
              onChange={handlePasswordChange}
              value={password}
              type='password'
              name='password'
              className='w-full border-gray-300 border rounded-lg p-1 mt-2'
            />
          </div>

          {error && <span className='text-red-500 text-xs mb-3'>{error}</span>}

          <button className='w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-900 hover:text-gray-300 transition-all duration-200'>
            Sign In
          </button>
        </form>

        <div className='default-container w-full p-4'>
          <span className='text-xs'>
            Don't have an account?
            <a className='text-gray-300 underline ml-1 cursor-pointer hover:text-blue-500 duration-100'>
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
