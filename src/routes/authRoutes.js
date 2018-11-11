import { createStackNavigator } from "react-navigation";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignIn";

const AuthRoutes = createStackNavigator(
  {
    SignIn,
    SignUp
  },
  {
    initialRouteName: "SignIn",
    headerMode: "none"
  }
);

export default AuthRoutes;
