import React, { Component } from "react";
import { Alert, StatusBar } from "react-native";
import ImagePicker from "react-native-image-picker";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  DatePicker,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail,
  Title,
  Input
} from "native-base";

import colors from "../../styles/colors";
import styles from "./styles";

const initialState = {
  image: "",
  date: new Date(),
  location: null,
  locationText: ""
};

export default class AddAnimal extends Component {
  constructor() {
    super();
    this.options = {
      title: "Selecione foto do animal",
      cancelButtonTitle: "Cancelar",
      takePhotoButtonTitle: "Tirar uma foto",
      chooseFromLibraryButtonTitle: "Selecionar da galeria",
      storageOptions: {
        skipBackup: true,
        cameraRoll: true,
        path: "animals"
      },
      permissionDenied: {
        title: "Permissão Negada!",
        text: `Para poder tirar fotos com sua câmera e escolher imagens da sua
        biblioteca, você precisa conceder permissões ao aplicativo.`,
        reTryTitle: "Tentar novamente",
        okTitle: "Confirmar"
      }
    };

    this.state = initialState;
  }

  componentWillUnmount = () => {
    this.setState(initialState);
  };

  _handleBack = () => {
    this.props.navigation.navigate("Animals");
  };

  _handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  _handleDateChange = newDate => {
    this.setState({ date: newDate });
  };

  _handleImagePick = () => {
    ImagePicker.showImagePicker(this.options, res => {
      if (res.error) {
        alert(res.error);
      } else if (res.didCancel) {
      } else {
        const source = { uri: res.uri };
        this.setState({ image: source });
      }
    });
  };

  findLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 }
    );
  };

  render() {
    const { date, image, location, locationText } = this.state;
    const status = this.props.navigation.getParam("status", "");
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
          <Left>
            <Button
              transparent
              style={styles.headerButton}
              onPress={this._handleBack}
            >
              <Icon name="md-arrow-back" style={styles.headerIcon} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerText}> Novo Animal </Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem>
              <Content style={styles.input}>
                <Input
                  disabled
                  autoCorrect={false}
                  style={styles.textInput}
                  placeholder="Status do Animal"
                  placeholderTextColor={colors.regular}
                  returnKeyType="done"
                  value={status}
                />
              </Content>
            </CardItem>
            <CardItem>
              <Content style={styles.input}>
                <Button
                  block
                  transparent
                  style={styles.imageButton}
                  onPress={this._handleImagePick}
                >
                  {image !== "" ? (
                    <Thumbnail
                      large
                      square
                      source={image}
                      style={styles.imagePreview}
                    />
                  ) : (
                    <Icon
                      name="camera"
                      type="FontAwesome"
                      style={styles.icon}
                    />
                  )}
                </Button>
              </Content>
            </CardItem>
            {false && (
              <CardItem>
                <Content style={styles.input}>
                  <Button
                    block
                    transparent
                    style={styles.imageButton}
                    onPress={this.findLocation}
                  >
                    {location ? (
                      <Text>Location: {location}</Text>
                    ) : (
                      <Icon
                        name="map-marker"
                        type="FontAwesome"
                        style={styles.icon}
                      />
                    )}
                  </Button>
                </Content>
              </CardItem>
            )}
            {!status.includes("Perdido") && (
              <CardItem>
                <Content style={styles.input}>
                  <Input
                    autoCorrect={false}
                    style={styles.textInput}
                    placeholder="Digite a localização"
                    placeholderTextColor={colors.regular}
                    returnKeyType="done"
                    value={locationText}
                    onChangeText={value =>
                      this._handleInputChange("locationText", value)
                    }
                  />
                </Content>
              </CardItem>
            )}
            <CardItem>
              <Content style={styles.input}>
                <DatePicker
                  defaultDate={date}
                  locale={"pt"}
                  placeHolderText="Selecione uma data"
                  textStyle={styles.text}
                  placeHolderTextStyle={{ color: colors.regular }}
                  onDateChange={this._handleDateChange}
                />
              </Content>
            </CardItem>
            <Button
              block
              style={styles.button}
              onPress={() =>
                Alert.alert(
                  "Por favor, insira uma foto do animal para facilitar a sua busca!"
                )
              }
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
