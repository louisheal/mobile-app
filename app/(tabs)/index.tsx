import { View, StyleSheet } from "react-native";
import ClubList from "@/components/ClubList";

const Index = () => {
  return (
    <View style={styles.container}>
      <ClubList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;