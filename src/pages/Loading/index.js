import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Container, Spinner } from "native-base";
import colors from "../../styles/colors";
import styles from "./styles";

export default class Loading extends Component {
  async componentDidMount() {
    const user = await AsyncStorage.getItem("@ama:user");
    if (user) {
      setTimeout(() => {
        this.props.navigation.navigate("DrawerRoutes");
      }, 1000);
    } else {
      setTimeout(() => {
        this.props.navigation.navigate("AuthRoutes");
      }, 1000);
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Spinner color={colors.primary} />
      </Container>
    );
  }
}
