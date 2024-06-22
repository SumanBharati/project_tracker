import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import RecentProjects from "./components/RecentProjects";
import AllProjects from "./components/AllProjects";
import Login from './components/Login';
import { Provider } from "react-redux";
import { appStore } from './utils/appStore';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/signIn",
          element: <Login />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/recentProjects",
          element: <RecentProjects />,
        },
        {
          path: "/allProjects",
          element: <AllProjects />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div className="App bg-cover bg-bodyBackground h-[100vh] w-[100vw]">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
