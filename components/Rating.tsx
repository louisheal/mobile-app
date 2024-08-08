import { useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";

const Rating = ({ onSubmit }: { onSubmit: (value: number) => void}) => {
  const [curr, setCurr] = useState(0);
  const items = [];

  for (let i = 1; i <= 5; i++) {
    items.push(
      <TouchableOpacity 
        style={(i <= curr) ? styles.full : styles.empty}
        onPress={() => setCurr(i)}
        key={i}
      />)
  }

  return (
    <>
      <View style={styles.container}>
        {items}
      </View>
      <Button title="Submit" disabled={curr === 0} onPress={() => onSubmit(curr)} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
  },
  empty: {
    width: 50,
    height: 50,
    borderColor: 'blue',
    borderWidth: 5,
  },
  full: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
})

export default Rating;