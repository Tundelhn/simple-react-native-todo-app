import React, { useState } from "react";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";
import Sandbox from "./Components/Sandbox";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an application", key: "2" },
    { text: "Play on the switch", key: "3" }
  ]);

  const pressHandler = key => {
    setTodos(prevState => {
      return todos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Text must be three characters long", [
        { text: "Exit", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  return (
    //<Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* {header} */}
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem pressHandler={pressHandler} item={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
