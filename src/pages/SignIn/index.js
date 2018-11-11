import React, { Component } from "react";
import { AsyncStorage, StatusBar } from "react-native";
import {
  Button,
  Container,
  Content,
  Icon,
  Input,
  Item,
  Spinner,
  Text,
  Thumbnail
} from "native-base";

import colors from "../../styles/colors";
import styles from "./styles";

const logo = require("../../images/animal.png");

const users = [
  {
    id: 1,
    name: "Jonathan Felipe da Silva",
    avatar: "https://avatars3.githubusercontent.com/u/22511089?v=4",
    email: "jonathan@teste.com",
    password: "123"
  },
  {
    id: 2,
    name: "João Marcos",
    avatar: "https://avatars0.githubusercontent.com/u/31287923?v=4",
    email: "joaomarcos@teste.com",
    password: "123"
  },
  {
    id: 3,
    name: "Usuario Teste",
    avatar: "https://help.github.com/assets/images/help/profile/identicon.png",
    email: "teste@teste.com",
    password: "123"
  }
];

const initialState = {
  email: "",
  password: "",
  loading: false
};

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // async componentDidMount() {
  //   const user = await AsyncStorage.getItem("@ama:user");

  //   if (user) {
  //     this.props.navigation.navigate("DrawerRoutes");
  //   }
  // }

  componentWillUnmount() {
    this.setState(initialState);
  }

  _handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  _handleSignInPress = async () => {
    this.setState({ loading: true });
    const { email, password } = this.state;

    let user = null;
    users.map(u => {
      if (email === u.email && password === u.password) {
        user = u;
      }
    });

    if (user) {
      await AsyncStorage.setItem("@ama:user", JSON.stringify(user));

      this.props.navigation.navigate("DrawerRoutes");
    }

    this.setState({ loading: false });
  };

  render() {
    const { email, password, loading } = this.state;

    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
        <Content style={styles.content}>
          <Thumbnail source={logo} style={styles.logo} square />
          <Item style={styles.item}>
            <Input
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor={colors.regular}
              returnKeyType="next"
              value={email}
              onChangeText={value => this._handleInputChange("email", value)}
              onSubmitEditing={() => this._passwordInput._root.focus()}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              ref={input => (this._passwordInput = input)}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor={colors.regular}
              returnKeyType="send"
              value={password}
              onChangeText={value => this._handleInputChange("password", value)}
              onSubmitEditing={this._handleSignInPress}
            />
          </Item>
          {loading ? (
            <Spinner color={colors.secondary} />
          ) : (
            <Button
              block
              style={styles.button}
              onPress={this._handleSignInPress}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </Button>
          )}
          {/* <Button block style={styles.socialButtons} backgroundColor="#3b5998">
            <Icon name="facebook" type="FontAwesome" />
            <Text>Entrar com o Facebook</Text>
          </Button> */}
          <Text style={styles.text}> OU </Text>
          <Button block style={styles.socialButtons} backgroundColor="#ff0000">
            <Icon name="google" type="FontAwesome" />
            <Text>Entrar com o google</Text>
          </Button>
          <Item style={styles.lastItem}>
            <Text style={styles.forgetPasswordText}>
              Esqueceu a senha?
              <Text style={styles.clickHereText}> Clique aqui!</Text>
            </Text>
          </Item>
        </Content>
      </Container>
    );
  }
}
