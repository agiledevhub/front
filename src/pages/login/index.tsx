import { useState } from 'react';
import { UserService } from '../../services/user.service';
import { Router, useNavigate } from 'react-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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

    return navigate('/home');

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

  const navToRegister = () => {
    return navigate('/register');
  };

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-primary flex-col'>
      <h1 className='text-3xl text-center text-default mb-10'>Agilehub</h1>

      <div>
        <form
          className='default-container min-w-72 w-72 min-h-64 mb-6 p-4'
          onSubmit={handleSubmit}
        >
          <div>
            <Input type='email' value={email} label='Email' htmlFor='email' />
          </div>

          <div>
            <Input
              type='password'
              value={password}
              label='Password'
              htmlFor='password'
              hasLink={true}
              linkText='Forgot password?'
            />
          </div>

          {error && <span className='text-red-500 text-xs mb-3'>{error}</span>}

          <Button type='submit' text='Login' />
        </form>

        <div className='default-container w-full p-4'>
          <span className='text-xs'>
            Don't have an account?
            <a
              className='text-default underline ml-1 cursor-pointer duration-100 text-default-hover'
              onClick={navToRegister}
            >
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
