import React, { Component } from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Container, Content, Spinner } from "native-base";

import Drawer from "./components/Drawer";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

import colors from "./styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333"
  }
});

class AuthLoading extends Component {
  constructor() {
    super();
    this.__isAuthenticated();
  }

  __isAuthenticated = async () => {
    const userToken = await AsyncStorage.getItem("@ama:userToken");

    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Spinner color="#dddddd" />
        </Content>
      </Container>
    );
  }
}

const AuthStack = createStackNavigator(
  {
    SignIn: SignIn
  },
  {
    headerMode: "none"
  }
);

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Perfil: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: Drawer,
    contentOptions: {
      // active
      activeTintColor: colors.darker,
      activeBackgroundColor: colors.primary,
      activeLabelStyle: {
        fontWeight: "bold",
        color: colors.black
      },
      // inactive
      inactiveTintColor: colors.darker,
      inactiveBackgroundColor: colors.transparent,
      // container
      itemsContainerStyle: {
        marginTop: 0,
        marginBottom: 10
        // marginHorizontal: 20
      },
      iconContainerStyle: {},
      // item style
      itemStyle: {},
      // label Style
      labelStyle: {
        fontSize: 16,
        fontWeight: "300",
        color: colors.darker
      }
    }
    // headerMode: "none"
  }
);

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    AuthLoading: AuthLoading
  },
  {
    // initialRouteName: "AuthLoading"
    initialRouteName: "App"
  }
);
