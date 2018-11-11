import React from "react";
import { Image } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail
} from "native-base";
import styles from "./styles";
import colors from "../../styles/colors";

const AnimalCard = props => (
  <Card style={styles.card}>
    <CardItem>
      <Left>
        <Thumbnail source={require("../../images/animal.png")} />
        <Body>
          <Text>{props.name}</Text>
          <Text note>{props.status}</Text>
        </Body>
      </Left>
      <Right>
        <Text note>{props.date}</Text>
      </Right>
    </CardItem>
    <CardItem cardBody>
      <Image source={{ uri: props.image }} style={styles.cardImage} />
    </CardItem>
    <CardItem style={{ justifyContent: "space-around", alignItems: "center" }}>
      <Left>
        <Button transparent>
          <Icon name="heart" style={styles.icon} />
          <Text style={styles.text}>{props.likes}</Text>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <Icon type="FontAwesome" name="comments" style={styles.icon} />
          <Text style={styles.text}>{props.comments}</Text>
        </Button>
      </Body>
      <Right>
        <Button transparent>
          <Icon type="FontAwesome" name="share" style={styles.icon} />
          <Text style={styles.text}>{props.shares}</Text>
        </Button>
      </Right>
    </CardItem>
  </Card>
);

export default AnimalCard;
