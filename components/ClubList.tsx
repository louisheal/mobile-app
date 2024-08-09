import { FlatList, StyleSheet } from "react-native";
import Club from "@/components/Club";
import useFetchClubs from "@/hooks/useFetchClubs";

const ClubList = () => {

  const [clubs] = useFetchClubs();

  return (
    <FlatList
      data={clubs}
      renderItem={({item}) => <Club club={item} />}
      keyExtractor={(club) => club.id}
      style={styles.clubList}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  clubList: {
    width: "100%",
  },
});

export default ClubList;