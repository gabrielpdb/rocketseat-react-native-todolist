import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type Props = {
  check: boolean
  text: string
  onCheck: () => void
  onRemove: () => void
}

export function Task({ check, text, onCheck, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        {check ? (
          <Image
            style={styles.check}
            source={require("../../../assets/check.png")}
          />
        ) : (
          <Image
            style={styles.check}
            source={require("../../../assets/notCheck.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.trash}
          source={require("../../../assets/trash.png")}
        />
      </TouchableOpacity>
    </View>
  )
}
