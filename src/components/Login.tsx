import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-6/12 absolute px-16 my-20 mx-auto right-0 left-0"
      >
        <h1 className="text-4xl font-semibold text-purple-800 m-4 text-center">
          Log in to your account
        </h1>
        <div className="ml-[135px] text-md font-semibold">
          <div className=" mt-2">Enter your email address</div>
          <input
            type="text"
            placeholder="Example@domain.com"
            className=" border border-purple-700 rounded-lg w-[70%] my-2 p-2"
          />

          <div className=" mt-2">Password</div>
          <input
            type="password"
            placeholder="Password"
            className="text-lg border border-purple-700 rounded-lg w-[70%] my-2 p-2"
          />

          <button className=" text-white bg-purple-700 rounded-lg w-[70%] my-4 p-3">
            Log In
          </button>
        </div>
        <div className="text-sm text-center">
          Don't have an account yet?{' '}
          <Link
            to='/signUp'
            className="text-purple-800"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
