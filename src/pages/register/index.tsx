import { use, useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const navBack = () => {
    return navigate(-1);
  };

  const nameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const formValid = false;

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-primary flex-col'>
      <h1 className='text-3xl text-center text-default mb-10'>Agilehub</h1>
      <div>
        <form className='default-container min-w-72 w-72 min-h-64 mb-6 p-4 space-y-3'>
          <div>
            <Input
              type={'text'}
              label={'Full Name'}
              value={name}
              htmlFor={'name'}
            />
          </div>
          <div>
            <Input
              type={'email'}
              label={'Email'}
              value={email}
              htmlFor={'email'}
            />
          </div>
          <div>
            <Input
              type={'password'}
              label={'Password'}
              value={password}
              htmlFor={'password'}
            />
          </div>
          <div>
            <Input
              type={'password'}
              label={'Confirm Password'}
              value={confirmPassword}
              htmlFor={'confirm-password'}
            />
          </div>

          <div>
            {error && (
              <span className='text-red-500 text-xs mb-3'>{error}</span>
            )}
          </div>
          <div>
            <Button type='submit' text='Submit' disabled={!formValid} />
          </div>
          <div>
            <Button
              type='button'
              text='Cancel'
              color='secondary'
              onClick={navBack}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
