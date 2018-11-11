import { createDrawerNavigator } from "react-navigation";

import Drawer from "../components/Drawer";

import AnimalsRoutes from "./animalsRoutes";

import colors from "../styles/colors";

const DrawerRoutes = createDrawerNavigator(
  {
    Animais: {
      screen: AnimalsRoutes
    },
    Perfil: {
      screen: AnimalsRoutes
    },
    Conta: {
      screen: AnimalsRoutes
    },
    Sobre: {
      screen: AnimalsRoutes
    }
  },
  {
    initialRouteName: "Animais",
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: colors.darker,
      // activeBackgroundColor: colors.transparent,
      activeBackgroundColor: colors.primary,
      activeLabelStyle: {
        fontWeight: "bold",
        color: colors.black
      },
      inactiveTintColor: colors.darker,
      inactiveBackgroundColor: colors.transparent,
      itemsContainerStyle: {
        marginTop: 0,
        marginBottom: 10
      },
      iconContainerStyle: {},
      itemStyle: {},
      labelStyle: {
        fontSize: 16,
        fontWeight: "300",
        color: colors.darker
      }
    }
  }
);

export default DrawerRoutes;
