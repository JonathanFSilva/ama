import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingVertical: 10,
    backgroundColor: colors.primary
  },
  logo: {
    width: 220,
    height: 220,
    alignSelf: "center"
  },
  item: {
    marginTop: 10,
    alignSelf: "center",
    borderColor: "transparent"
  },
  lastItem: {
    marginTop: 10,
    marginBottom: 0,
    alignSelf: "center",
    justifyContent: "flex-end",
    borderColor: "transparent"
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: colors.dark,
    backgroundColor: colors.white,
    alignSelf: "stretch",
    marginHorizontal: 20,
    fontSize: 16
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  button: {
    borderRadius: 5,
    alignSelf: "stretch",
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: colors.secondary
  },
  socialButtons: {
    alignSelf: "stretch",
    marginVertical: 15,
    marginHorizontal: 20
  },
  forgetPasswordText: {
    color: colors.dark
  },
  clickHereText: {
    color: colors.black,
    fontWeight: "bold"
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    color: colors.dark
  }
});

export default styles;
