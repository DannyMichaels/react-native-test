import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native'
import Gig from './Gig'
import { generateID, toSnakeCase } from './utils/generateID'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit'

export default function App() {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [total, setTotal] = useState(0)

  const [gigs, setGigs] = useState([
    {
      description: 'freelance job',
      amount: 499.99,
      timestamp: new Date(),
    },
  ])

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0))
  }, [gigs])

  const addGig = () => {
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
        timestamp: new Date(),
      },
    ])
    setDescription('')
    setAmount('')
  }

  const gigsJSX = gigs.map(gig => (
    <Gig
      key={toSnakeCase(description) + generateID()}
      description={gig.description}
      gig={gig}
      amount={gig.amount}
    />
  ))

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>
          React Native App for Income Tracking
        </Text>
      </View>

      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel='$'
          yAxisSuffix='k'
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: 'black',
            backgroundGradientTo: 'black',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <Text>Total Income: ${total}</Text>

      {gigsJSX}

      <TextInput
        style={styles.todoInput}
        value={description}
        keyboardType='numeric'
        placeholder='enter a description'
        onChangeText={text => setFormData({ ...formData, description: text })}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.todoInput}
        value={amount}
        keyboardType='numeric'
        placeholder='Enter the amount you made ($)'
        // onChangeText={text => setFormData({ ...formData, amount: text })}
        onChangeText={text => setAmount(text)}
      />
      <Button
        disabled={!amount || !description}
        onPress={addGig}
        title='add Gig'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  todoInput: {
    height: 40,
    margin: 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  titleText: {
    // backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
