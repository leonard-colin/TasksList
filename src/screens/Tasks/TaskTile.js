import React from 'react'
import { Text, Image, StyleSheet, View, Pressable } from 'react-native'

export default function TaskTile({ task, onUpdateTask, onDeleteTask }) {
  const onChangeStatus = () => {
    onUpdateTask(task.id)
  }

  const _onDeleteTask = () => {
    onDeleteTask(task.id)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onChangeStatus} style={styles.subContainer}>
        <Image 
          style={styles.check}
          source={task.isCompleted ? require('../../../assets/icons/check_circle.png') : require('../../../assets/icons/circle.png')}
        />
        <Text style={styles.title}>{task.title}</Text>
      </Pressable>

      <Pressable onPress={_onDeleteTask}>
        <Image 
        style={styles.check}
        source={require('../../../assets/icons/delete.png')}
        />
      </Pressable>
    </View>
    
  )
}

const styles = StyleSheet.create({
  check: {
    width: 26,
    height: 26,
  },
  container: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    marginLeft: 20,
    fontSize: 16
  }
})