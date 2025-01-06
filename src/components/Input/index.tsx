import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

type Props = {
  onAdd: () => void
  onChangeText: (text: string) => void
  value: string
}

export function Input({ onAdd, onChangeText, value }: Props) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  )
}
