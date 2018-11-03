import React from "react";
import { Container, Thumbnail, Content, Text } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { SafeAreaView, DrawerItems } from "react-navigation";

import styles from "./styles";

const Drawer = props => (
  <Container>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Grid>
        <Row size={30} style={styles.userContent}>
          <Content style={styles.content}>
            <Thumbnail source={require("../../images/animal.png")} />
            <Text style={styles.primaryText}>Jonathan F. Silva</Text>
            <Text style={styles.secondaryText}>jonathansilva259@gmail.com</Text>
          </Content>
        </Row>
        <Row size={70}>
          <Content>
            <DrawerItems {...props} />
          </Content>
        </Row>
      </Grid>
    </SafeAreaView>
  </Container>
);

export default Drawer;

/* <View style={styles.menuHeader}>

  {console.log(this.props)}

  <Image
    style={styles.userImage}
    source={{ uri: 'https://avatars2.githubusercontent.com/u/22511089?s=400&u=32fc3de97400f94aaa22c5825e145843d1dfde0b&v=4' }}
  />

  <View style={styles.userInfo}>
    <Text style={styles.userName}>{'Jonathan Felipe da Silva'}</Text>
    <Text style={styles.userEmail}>{'jonathansilva259@gmail.com'}</Text>
  </View>

</View> */
