export const Login = () => {
  return (
    <div className='flex w-screen h-screen items-center justify-center bg-primary flex-col'>
      <h1 className='text-3xl text-center text-gray-300 mb-10'>Agilehub</h1>

      <div>
        <div className='default-container min-w-72 min-h-64 mb-6 p-4'>
          <div>
            <label className='text-sm ' htmlFor='username'>
              Username
            </label>
            <input
              type='text'
              name='username'
              className='w-full border-gray-300 border rounded-lg p-1 mt-2'
            />
          </div>

          <div>
            <div className='flex justify-between items-center'>
              <label className='text-sm ' htmlFor='password'>
                Password
              </label>

              <span className='text-[10px]'>Forgot password?</span>
            </div>
            <input
              type='password'
              name='password'
              className='w-full border-gray-300 border rounded-lg p-1 mt-2'
            />
          </div>

          <button className='w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-900 hover:text-gray-300 transition-all duration-200'>
            Sign In
          </button>
        </div>

        <div className='default-container w-full p-4'>
          <span className='text-xs'>
            Don't have an account?
            <a className='text-gray-300 underline ml-1 cursor-pointer'>
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
