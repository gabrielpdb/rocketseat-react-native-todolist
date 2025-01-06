import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    top: -27,
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
  input: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#262626",
    fontSize: 16,
    color: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#0D0D0D",
  },
  inputFocused: {
    borderColor: "#5E60CE",
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
  },
})
