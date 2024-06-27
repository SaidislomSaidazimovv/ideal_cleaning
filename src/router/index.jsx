import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { SignUp, SignIn, Main, ForgotPassword, Update } from "@pages";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="main" element={<Main />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="update" element={<Update />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
