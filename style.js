import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 180,
    marginBottom: 10,
    justifyContent: "center",
  },
  viewStyle: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  inputStyleTop: {
    width: "100%",
    height: 48,
    overflow: "hidden",
    backgroundColor: "#615d5d",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    borderTopRightRadius: 90,
    borderTopLeftRadius: 90
  },
  inputStyle: {
    width: "100%",
    height: 48,
    overflow: "hidden",
    backgroundColor: "#615d5d",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
  },
  textInput: {
    height: 50,
    color: "white",
    fontSize: 20,
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 150,
    borderRadius: 10,
    backgroundColor: "black",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
  loginButtonSection: {
    width: "100%",
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: "#e39919",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 150,
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: "#7a1a1a",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderTopWidth: 2,
    borderEndWidth: 2,
    borderStartWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#615d5d",
    marginTop: 20,
  },
  mata: {
    paddingTop: 15,
    paddingRight: 20,
  },
  inputStyle2: {
    width: "100%",
    height: 48,
    overflow: "hidden",
    backgroundColor: "#615d5d",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    elevation: 5,
    flexDirection: "row",
  },
  inputStyle3: {
    width: "100%",
    height: 48,
    overflow: "hidden",
    backgroundColor: "#615d5d",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    elevation: 5,
    flexDirection: "row",
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90
  }
});

export default styles;
