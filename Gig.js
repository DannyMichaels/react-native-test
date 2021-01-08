import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Gig = ({ description = 'Take dogs out for a walk', amount = 1 }) => {
  return (
    <View>
      <Text>{description} </Text>
      <Text>${amount} </Text>
    </View>
  )
}

export default Gig

const styles = StyleSheet.create({})
