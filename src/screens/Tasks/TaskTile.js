import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'

export default function TaskTile({task}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image 
          style={styles.check}
          source={require('../../../assets/icons/circle.png')}
        />
        <Text style={styles.title}>{task.title}</Text>
      </View>
      <Image 
        style={styles.check}
        source={require('../../../assets/icons/delete.png')}
      />
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