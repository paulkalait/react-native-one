import { View, Text, StyleSheet, Pressable } from "react-native";

// destructuring props
const GoalItem = ({ text, onDeleteItem, id }) => {
  //add the pressable component wrapping it, to make it pressable
  return (
    //bind allowds you to pre configure the function
                                                        //get hold of the pressed property provided by pressable if pressed is true, run the styles.pressedItem styling
    <Pressable onPress={onDeleteItem.bind(this, id)} style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.eachGoalContainer}>
        {/* itemData => item (the object) => item.text (goal text property)*/}
        <Text style={styles.singleGoal}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  eachGoalContainer: {
    shadowColor: "#ffff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  pressedItem: {
    opacity: .5
  },
  singleGoal: {
    marginBottom: "5%",
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 15,
    borderColor: "#cccccc",
    color: "black",
  },
});
