import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Rating = ({ onSubmit, close }: { onSubmit: (value: number) => void, close: () => void }) => {
  const [curr, setCurr] = useState(0);
  const items = [];

  for (let i = 1; i <= 5; i++) {
    items.push(
      <Pressable 
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
      <View style={styles.row}>
        <Pressable style={styles.cancel} onPress={close}>
          <Text style={styles.white}>Cancel</Text>
        </Pressable>
        <Pressable style={curr === 0 ? styles.disabled : styles.enabled} disabled={curr === 0} onPress={() => onSubmit(curr)}>
          <Text style={styles.black}>Submit</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 4,
  },
  enabled: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  disabled: {
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  cancel: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  white: {
    color: "white",
  },
  grey: {
    color: "grey",
  },
  black: {
    color: "black",
  },
  container: {
    flexDirection: "row",
    gap: 4,
    marginTop: 12,
  },
  empty: {
    width: 50,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
  },
  full: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
  },
})

export default Rating;