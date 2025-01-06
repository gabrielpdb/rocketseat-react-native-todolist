import { View } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"

import { Body } from "../../components/Body"

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  )
}
