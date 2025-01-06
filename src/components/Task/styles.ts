import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#262626",
    gap: 8,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  check: { padding: 3.27, width: 24, height: 24 },
  text: {
    color: "#F2F2F2",
    flex: 1,
    flexWrap: "wrap",
    fontSize: 14,
  },
  trash: {},
})
