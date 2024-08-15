import TicketList from "@/components/TicketList";
import { View, StyleSheet } from "react-native";

const Tickets = () => {
  return (
    <View style={styles.container}>
      <TicketList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default Tickets;