import React, { Component } from "react";
import { Alert, AsyncStorage, StatusBar } from "react-native";
import ActionButton from "react-native-action-button";
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title
} from "native-base";
import AnimalCard from "../../components/AnimalCard";

import colors from "../../styles/colors";
import styles from "./styles";

const animals = [
  {
    id: 1,
    name: "Bob",
    status: "Perdido",
    image:
      "http://s2.glbimg.com/8Qm0ZoUOpOd0pmzfqKK475OrstU=/e.glbimg.com/og/ed/f/original/2015/10/28/cachorro-pets.jpg",
    likes: 7,
    comments: 5,
    shares: 2,
    date: "07/10/2018",
    userId: 1
  },
  {
    id: 2,
    name: "Chico",
    status: "Perdido",
    image:
      "http://jconlineimagem.ne10.uol.com.br/imagem/noticia/2017/12/24/normal/0d784000546f604a6f337e10546bda3d.jpg",
    likes: 12,
    comments: 3,
    shares: 5,
    date: "17/10/2018",
    userId: 2
  },
  {
    id: 3,
    name: "Mel",
    status: "Encontrado",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZuRQn-KtBl54OGALAPbJLL-JF_NR-ZaknSMrum1AQNPRv5xg",
    likes: 10,
    comments: 15,
    shares: 24,
    date: "31/10/2018",
    userId: 3
  },
  {
    id: 4,
    name: "Nina",
    status: "Perdido",
    image:
      "https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2017/11/bernese-mountain-dog-1177074_1280.jpg",
    likes: 3,
    comments: 7,
    shares: 10,
    date: "07/11/2018",
    userId: 3
  },
  {
    id: 5,
    name: "Rex",
    status: "Encontrado",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3T7l3kb1UX-rec7Sm0NvxM54zq4mLLyhPPavvRPaxni_DgsAX",
    likes: 23,
    comments: 21,
    shares: 12,
    date: "27/10/2018",
    userId: 2
  }
];

export default class Animals extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  static navigationOptions = {
    drawerLabel: "Animais"
  };

  _handleSignOut = () => {
    AsyncStorage.removeItem("@ama:user");

    this.props.navigation.navigate("AuthRoutes");
  };

  toggleModal = () => {
    const { modalIsOpen } = this.state;

    this.setState({ modalIsOpen: !modalIsOpen });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
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
            <Title style={styles.headerText}> Animais </Title>
          </Body>
          <Right>
            <Button
              transparent
              style={styles.headerButton}
              onPress={this._handleSignOut}
            >
              <Icon
                name="sign-out"
                type="FontAwesome"
                style={styles.headerIcon}
              />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {animals.map(animal => (
            <AnimalCard {...animal} key={animal.id} />
          ))}
        </Content>

        <ActionButton
          spacing={50}
          buttonColor={colors.secondary}
          bgColor={colors.darkTransparent}
        >
          <ActionButton.Item
            size={0}
            spaceBetween={-30}
            title="Animal Perdido"
            textStyle={styles.actionButtonIconText}
            textContainerStyle={styles.actionButtonIconTextContainer}
            buttonColor={colors.secondary}
            onPress={() =>
              this.props.navigation.navigate("AddAnimal", {
                status: "Animal Perdido"
              })
            }
          >
            <Icon />
          </ActionButton.Item>
          <ActionButton.Item
            size={0}
            spaceBetween={-30}
            title="Animal Encontrado"
            textStyle={styles.actionButtonIconText}
            textContainerStyle={styles.actionButtonIconTextContainer}
            buttonColor={colors.secondary}
            onPress={() =>
              this.props.navigation.navigate("AddAnimal", {
                status: "Animal Encontrado"
              })
            }
            style={{ backgroundColor: "purple" }}
          >
            <Icon />
          </ActionButton.Item>
          <ActionButton.Item
            size={0}
            spaceBetween={-30}
            title="Animal Abandonado"
            textStyle={styles.actionButtonIconText}
            textContainerStyle={styles.actionButtonIconTextContainer}
            buttonColor={colors.secondary}
            onPress={() =>
              this.props.navigation.navigate("AddAnimal", {
                status: "Animal Abandonado"
              })
            }
          >
            <Icon />
          </ActionButton.Item>
        </ActionButton>
      </Container>
    );
  }
}
