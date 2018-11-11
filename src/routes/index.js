import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import AuthRoutes from "./authRoutes";
import DrawerRoutes from "./drawerRoutes";

import Loading from "../pages/Loading";

const Routes = createSwitchNavigator(
  {
    Loading,
    AuthRoutes,
    DrawerRoutes
  },
  {
    initialRouteName: "Loading",
    // initialRouteName: "AuthRoutes",
    // initialRouteName: "DrawerRoutes",
    headerMode: "none"
  }
);

export default Routes;
