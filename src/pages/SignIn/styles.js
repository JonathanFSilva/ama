import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingVertical: 10,
    backgroundColor: "#F5F5F5"
  },
  logo: {
    width: 240,
    height: 240,
    alignSelf: "center"
  },
  item: {
    marginTop: 20,
    alignSelf: "center",
    borderColor: "transparent"
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    alignSelf: "stretch",
    marginHorizontal: 20,
    fontSize: 16
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  button: {
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 20,
    backgroundColor: "#FC6663"
  }
});

export default styles;
