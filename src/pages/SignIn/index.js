import React, { Component } from "react";
import {
  Button,
  Container,
  Content,
  Input,
  Item,
  Text,
  Thumbnail
} from "native-base";

import styles from "./styles";

const logo = require("../../images/animal.png");

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  _handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  _handleSignInPress = () => {
    const { email, password } = this.state;

    if (email === "jonathansilva259@gmail.com" && password === "123") {
      this.props.navigation.navigate("App");
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Thumbnail source={logo} style={styles.logo} square />
          <Item style={styles.item}>
            <Input
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={value => this._handleInputChange("email", value)}
              onSubmitEditing={() => this._password.focus()}
            />
          </Item>
          <Item style={styles.item} last>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={value => this._handleInputChange("password", value)}
              ref={input => (this._password = input)}
            />
          </Item>
          <Item style={styles.item}>
            <Button style={styles.button} onPress={this._handleSignInPress}>
              <Text style={styles.buttonText}>Entrar</Text>
            </Button>
          </Item>
        </Content>
      </Container>
    );
  }
}
