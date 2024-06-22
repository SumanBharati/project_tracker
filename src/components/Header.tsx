import logo from "../assets/Logo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [signInView, setSignInView] = useState<boolean>(false);
  const [signUpView, setSignUpView] = useState<boolean>(false);

  const handleTrackerClick = () => {
    setSignInView(false);
    setSignUpView(false);
  };

  return (
    <div className="flex shadow-lg bg-[#ebd9ff] h-20">
      <Link
        to={"/"}
        onClick={handleTrackerClick}
        className="w-[50%] h-[60%] my-4 ml-2"
      >
        <img src={logo} alt="project-logo" />
      </Link>
      <div className="w-[70%] ml-[69%] my-2 flex">
        {!signInView && !signUpView && (<>
          <Link
            to={"/signIn"}
            onClick={() => setSignInView(true)}
            className="text-sm text-purple-800 font-semibold m-2 py-3 px-2"
          >
            Log in
          </Link>
          <Link
            to={"/signUp"}
            onClick={() => setSignUpView(true)}
            className="text-sm font-semibold text-white bg-purple-800 rounded-full m-2 py-3 px-4"
          >
            Get Started
            <ArrowForwardIcon />
          </Link></>
        )}
      </div>
    </div>
  );
};

export default Header;
