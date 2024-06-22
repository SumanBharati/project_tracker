import langingPageImage from "../assets/LandingPageImage.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LandingPage = () => {
  return (
    <div className="flex">
      <div className="w-6/12 pt-[10rem] pl-20 ml-8">
        <h1 className="text-6xl font-bold">Your Productivity, Elevated</h1>
        <p className="text-lg font-normal py-2 px-1">Keep all your tasks organized on one convenient platform.</p>
        <button className="text-sm font-semibold text-white bg-purple-800 rounded-full my-4 py-3 px-4">
            Get Started<ArrowForwardIcon />
          </button>
      </div>
      <img
        className="w-[40%] h-[80vh] my-4 ml-10"
        src={langingPageImage}
        alt="landing_page"
      />
    </div>
  );
};

export default LandingPage;
