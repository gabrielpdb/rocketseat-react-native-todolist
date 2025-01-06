import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./styles"
import { Input } from "../Input"
import { useEffect, useState } from "react"
import { Task } from "../Task"

type TaskProps = {
  check: boolean
  text: string
}

export function Body() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [inputText, setInputText] = useState("")
  const [created, setCreated] = useState(0)
  const [done, setDone] = useState(0)

  function handleAddTask() {
    setTasks((prevState) => [...prevState, { check: false, text: inputText }])
    setInputText("")
  }

  function handleCheckTask(text: string) {
    setTasks((prevState) => {
      const newstate = prevState.map((task) => {
        if (task.text == text) {
          if (!task.check) {
            task.check = true
          } else {
            task.check = false
          }
        }
        return task
      })
      return newstate
    })
  }

  function handleRemoveTask(text: string) {
    setTasks((prevState) => prevState.filter((task) => task.text !== text))
  }

  useEffect(() => {
    setCreated(0)
    setDone(0)
    tasks.forEach((task) => {
      if (!task.check) {
        setCreated((prev) => prev + 1)
      } else {
        setDone((prev) => prev + 1)
      }
    })
  }, [tasks])

  return (
    <View style={styles.container}>
      <Input
        onChangeText={setInputText}
        onAdd={handleAddTask}
        value={inputText}
      />

      <View style={styles.header}>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Criadas</Text>
          <Text style={styles.headerCounter}>{created}</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={[styles.headerText, { color: "#8284FA" }]}>
            Concluídas
          </Text>
          <Text style={styles.headerCounter}>{done}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task
            onCheck={() => handleCheckTask(item.text)}
            onRemove={() => handleRemoveTask(item.text)}
            check={item.check}
            text={item.text}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Image
              style={{ marginBottom: 16 }}
              source={require("../../../assets/empty.png")}
            />
            <Text
              style={{
                color: "#808080",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 24,
              }}
            >
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text
              style={{ color: "#808080", fontSize: 14, fontWeight: "regular" }}
            >
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}
