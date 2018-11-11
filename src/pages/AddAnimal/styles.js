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
    backgroundColor: colors.light
  },
  card: {
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: colors.dark,
    backgroundColor: colors.lighter,
    alignSelf: "stretch",
    fontSize: 16
  },
  textInput: {
    color: colors.dark,
    fontSize: 16
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  button: {
    elevation: 3,
    borderRadius: 3,
    alignSelf: "stretch",
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: colors.secondary
  },
  imageButton: {
    height: 128,
    backgroundColor: colors.transparent
  },
  icon: {
    color: colors.dark,
    alignSelf: "center",
    justifyContent: "center"
  },
  imagePreview: {
    width: 128,
    height: 128,
    alignSelf: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.dark,
    fontSize: 16,
    alignSelf: "flex-start"
  }
});

export default styles;
