import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Counter({ title, nb }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
    
  // },
  nb: {
    fontSize: 20,
    fontWeight: "bold"
  },
  title: {
    fontSize: 20,
    color: "grey",
    opacity: .6
  },
})