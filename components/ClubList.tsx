import { FlatList } from "react-native";
import Club from "@/components/Club";
import useFetchClubs from "@/hooks/useFetchClubs";

const ClubList = () => {

  const [clubs] = useFetchClubs();

  return (
    <FlatList
      data={clubs}
      renderItem={({item}) => <Club club={item} />}
      keyExtractor={(club) => club.id}
      style={{width: "100%"}}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ClubList;