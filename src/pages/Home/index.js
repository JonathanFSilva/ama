import React, { Component } from "react";
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title
} from "native-base";

import colors from "../../styles/colors";
import styles from "./styles";

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require("./chats-icon.png")}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor={colors.regular} style={styles.header}>
          <Left>
            <Button
              transparent
              style={styles.headerButton}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="md-menu" style={styles.headerIcon} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerText}> Home </Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require("../../images/animal.png")} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
