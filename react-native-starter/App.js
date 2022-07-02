import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalEnteredText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (event) => {
    setEnteredGoalText(event);
  };

  //when buttpn is clicked
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      goalEnteredText,
    ]);
    console.log(courseGoals)
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add a goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
          {courseGoals.map((goal) => 
            <Text style={styles.singleGoal} key={goal}>{goal}</Text>
          )}
      </View>
    </View>
  );
}

//              allows for auto complete
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    // take the entire height of the app
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  TextInput: {
    width: "70%",
    borderWidth: 1.5,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 15,
    borderColor: "#cccccc",
    marginRight: 3,
  },
  goalsContainer: {
    // will take up 7/8ths of the screen because text input container is 1
    flex: 7,
  },
  singleGoal:{
    marginBottom: '5%'
    
  }
});
