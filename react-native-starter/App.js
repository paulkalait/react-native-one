import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  const [modalIsVisable, setModalIsVisable] = useState(false)
  
  const startAddGoalHandler = () => {
    setModalIsVisable(true)
  }

  const endAddGoalHadler = () => {
    setModalIsVisable(false)
  }
  //when button is clicked
  const addGoalHandler = (goalEnteredText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // flatlist will look for a key property that i set here. every object item hads a key property
      { text: goalEnteredText, id: Math.random().toString() },
    ]);
    setModalIsVisable(false)
    console.log(courseGoals);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
                                    //IF THERE IS A MATTCH THEN THE NEW ARRAY WILL FILTER OUT THAT MATCHED ID
      return currentCourseGoals.filter((goal) => goal.id !== id )
    })
    console.log('DELETED')
  }

  return (
    //by default this is not scrollable
    <View style={styles.appContainer}>
    <Button title="Add New Goal" color='black'  onPress={startAddGoalHandler}/>
    
     <GoalInput onAddGoal={addGoalHandler} visable={modalIsVisable} onCloseModal={endAddGoalHadler} />
      <View elevation={10} style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceHorizontal={false}
          renderItem={(itemData) => {
            return <GoalItem item={itemData.item} text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />;
          }}
          keyExtractor={(item, index) => {
            {
              /* tells flatlist how to get to the unique key */
            }
            return item.id;
          }}
        />
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
  goalsContainer: {
    // will take up 7/8ths of the screen because text input container is 1
    flexDirection: "column",
    flex: 7,
  },
});
