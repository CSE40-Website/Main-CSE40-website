import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "quiz",
    path: "/quiz",
    element: '',
  },
  {
    name: "history",
    path: "/history",
    element: "",
  },
  {
    name: "VR tour",
    target: "vr-tour",
    element: "",
  },
];

export default routes;
