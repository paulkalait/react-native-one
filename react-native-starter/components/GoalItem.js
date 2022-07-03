import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

// destructuring props
const GoalItem = ({ text, onDeleteItem, id }) => {
  //add the pressable component wrapping it, to make it pressable
  return (
    //bind allowds you to pre configure the function
                                                        //get hold of the pressed property provided by pressable if pressed is true, run the styles.pressedItem styling
    <Pressable  style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.eachGoalContainer}>
        {/* itemData => item (the object) => item.text (goal text property)*/}
        <Text style={styles.singleGoal}>{text}</Text>
        <MaterialIcons  onPress={onDeleteItem.bind(this, id)} name="delete" size={24} color="#333" />
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  eachGoalContainer: {
    shadowColor: "#ffff",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: "5%",
 paddingVertical: 5,
paddingHorizontal: 10,
    color: "black",
    width: '100%',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
 
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  pressedItem: {
    opacity: .5
  },
  singleGoal: {
    marginTop: '1%'
  }

});
