import React, {useState} from 'react'
import { TextInput, StyleSheet} from 'react-native'


export default function TaskForm() {
  const [newTitle, setNewTitle] = useState()

  const onChangeText = (val) => {
    setNewTitle(val)
  }
  return (
    <>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
      />

    </>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
  }
})