import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: colors.white
  },
  headerText: {
    color: colors.dark
  },
  headerIcon: {
    color: colors.dark
  },
  headerButton: {
    marginHorizontal: 20,
    backgroundColor: colors.transparent
  },
  content: {
    elevation: -1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: colors.light
  },
  actionButtonIconTextContainer: {
    height: "auto",
    backgroundColor: colors.lighter
  },
  actionButtonIconText: {
    fontSize: 18,
    fontWeight: "400"
  },
  actionButtonIcon: {
    color: colors.white
  },
  btn: {
    color: colors.white,
    backgroundColor: colors.secondary
  }
});

export default styles;
