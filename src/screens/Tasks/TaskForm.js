import React, {useState} from 'react'
import { TextInput, StyleSheet, Button, View} from 'react-native'
import { useDispatch } from 'react-redux'

import { addTask } from '../../redux/actions'

export default function TaskForm() {
  const [newTitle, setNewTitle] = useState("")
  const dispatch = useDispatch()

  const onChangeText = (val) => {
    setNewTitle(val)
  }

  const onAddNewTask = () => {
    if (newTitle === "") return
    dispatch(addTask(newTitle))
    setNewTitle("")
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
      />
      <Button
        onPress={onAddNewTask}
        title="Ajouter"
        color="blue"
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 15
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
    height: 40,
  }
})