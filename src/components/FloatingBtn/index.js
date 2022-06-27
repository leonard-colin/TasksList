import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

export default function FloatingBtn({ toggle, isOpen }) {
  return (
    <>
      <Pressable onPress={toggle}  style={styles.btn}>
        {/* {isFormVisible ? <Image source={require('../../../assets/icons/cancel_circle.png')}/> : <Image source={require('../../../assets/icons/add_circle.png')}/>} */}
        <Text style={styles.txt}>{isOpen ? "x" : "+"}</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 30,
    bottom: 40,
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "orange",
  },
  txt: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
})