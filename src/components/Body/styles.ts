import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: "#1A1A1A",
    flex: 1,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerItem: {
    flexDirection: "row",
    alignItems: "center",

    gap: 8,
  },
  headerText: { color: "#4EA8DE", fontWeight: "bold", fontSize: 14 },
  headerCounter: {
    minWidth: 24,
    backgroundColor: "#333333",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 999,
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 12,
  },
  list: {},
  emptyList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#333333",
    borderTopWidth: 0.5,
    paddingTop: 48,
  },
})
