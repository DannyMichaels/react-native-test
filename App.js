import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import Todo from './Todo'

export default function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([input, ...todos])
    setInput('')
  }

  const todosJSX = todos.map(todo => <Todo title={todo} />)

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Hello world 🚀 🚀 🚀 </Text>
      </View>

      {todosJSX}

      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={text => setInput(text)}
      />
      <Button onPress={addTodo} title="add todo" />
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
