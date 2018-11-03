import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  userContent: {
    alignItems: "flex-end",
    backgroundColor: colors.secondary
  },
  primaryText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold"
  },
  secondaryText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "400"
  }
});

export default styles;
