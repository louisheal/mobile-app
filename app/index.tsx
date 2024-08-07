import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import ClubList from "@/components/ClubList";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ClubList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 12 : 0,
    width: "100%",
  },
});

export default Index;