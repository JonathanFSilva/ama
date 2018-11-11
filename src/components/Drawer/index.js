import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Thumbnail
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { SafeAreaView, DrawerItems } from "react-navigation";

import styles from "./styles";

export default class Drawer extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    const user = JSON.parse(await AsyncStorage.getItem("@ama:user"));
    console.log(user);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <Container>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <Grid>
            <Row size={30} style={styles.userContent}>
              <Content style={styles.content}>
                <Thumbnail source={{ uri: user.avatar }} />
                <Text style={styles.primaryText}>{user.name}</Text>
                <Text style={styles.secondaryText}>{user.email}</Text>
              </Content>
            </Row>
            <Row size={70}>
              <Content>
                <DrawerItems {...this.props} />
              </Content>
            </Row>
          </Grid>
        </SafeAreaView>
      </Container>
    );
  }
}
