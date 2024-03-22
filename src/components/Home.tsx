import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View>
        <Text style={styles.heading}>My home</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    heading:{
        color:'black',
        fontSize:30
    }
  })

export default Home
