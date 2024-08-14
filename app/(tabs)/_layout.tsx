import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            fontWeight: 900,
          },
          headerTintColor: "white",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
          },
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;