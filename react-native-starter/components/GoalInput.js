import { FontDisplay } from "expo-font";
import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import NOTESIMG from "../assets/image/notesimg.png";

const GoalInput = ({ onAddGoal, visable, onCloseModal }) => {
  const [goalEnteredText, setEnteredGoalText] = useState("");

  const goalInputHandler = (event) => {
    setEnteredGoalText(event);
  };
  //same name as in app.js but in this case is the middle man between the parent function and child
  const addGoalHandler = () => {
    onAddGoal(goalEnteredText);
    //set the state back to an empty string
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visable} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={NOTESIMG} style={styles.image} />
        <TextInput
          style={styles.TextInput}
          onChangeText={goalInputHandler}
          placeholder="Add goal"
          value={goalEnteredText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.GoalButtons}>
            <Button title="Cancel" color="white" onPress={onCloseModal} />
          </View>
          <View style={styles.GoalButtons}>
          <Button onPress={addGoalHandler} title="Add Goal" color="white" />
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-evenly",
  },
  TextInput: {
    width: "80%",
    borderWidth: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 18,
    backgroundColor: '#f0f0f0',
    borderColor: "black",
    marginRight: 3,
    color: "black",
  },
  GoalButtons: {
    backgroundColor: "black",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    marginBottom: 20,
  },
});
