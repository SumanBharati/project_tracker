import SignUpImage from "../assets/SignUpImage.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-6/12 px-12 my-16 mx-auto right-0 left-0"
      >
        <h1 className="text-4xl font-semibold text-purple-800 m-4 text-center">
          Welcome to Tracker
        </h1>
        <div className="ml-[135px] text-md font-semibold">
          <div className=" mt-2">Enter your full name</div>
          <input
            type="text"
            placeholder="Full name"
            className=" border border-purple-700 rounded-lg w-[70%] my-2 p-2"
          />
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
            Sign Up
          </button>
        </div>
        <div className="text-sm text-center">
          Already a member?{' '}
          <Link to="/signIn" className="text-purple-800">
            Sign In
          </Link>
        </div>
      </form>
      <img
        src={SignUpImage}
        alt="signup_image"
        className="w-[40%] h-[85vh] mr-20"
      />
    </div>
  );
};

export default SignUp;
