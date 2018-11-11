import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    marginTop: 0,
    marginBottom: 10
  },
  cardImage: {
    flex: 1,
    height: 240,
    width: null
  },
  body: {
    alignSelf: "flex-start",
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.secondary
  },
  icon: {
    fontSize: 32,
    color: colors.secondary
  }
});

export default styles;
