import { FlatList, StyleSheet } from "react-native";
import Club from "@/components/Club";
import useFetchClubs from "@/hooks/useFetchClubs";

const ClubList = () => {

  const [clubs] = useFetchClubs();

  // TODO: Should be contained inside a view
  return (
    <FlatList
      data={clubs}
      renderItem={({ item }) => <Club item={item} />}
      keyExtractor={(item) => item.id}
      style={styles.clubList}
    />
  );
}

const styles = StyleSheet.create({
  clubList: {
    width: "100%",
  },
});

export default ClubList;