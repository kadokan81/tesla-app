import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  titles: {
    marginTop: "30%",
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
  },
  subTitles: {
    fontSize: 20,
    color: "rgb(57,60,65)",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
export default styles;
