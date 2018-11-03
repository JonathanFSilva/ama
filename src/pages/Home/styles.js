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
    backgroundColor: colors.lighter
  }
});

export default styles;
