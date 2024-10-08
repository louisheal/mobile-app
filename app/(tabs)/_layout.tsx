import { TicketProvider } from '@/contexts/TicketContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from "expo-router";

const Options = {
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: "white",
  tabBarStyle: {
    backgroundColor: "black",
  },
  tabBarShowLabel: false,
}

const TabLayout = () => {
  return (
    <TicketProvider>
      <Tabs screenOptions={Options}>
        <Tabs.Screen
          name="friends"
          options={{
            title: "Friends",
            tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="user-friends" color={color} />,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: 900,
            },
            headerTintColor: "white",
          }}
        />
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
          }}
        />
        <Tabs.Screen
          name="tickets"
          options={{
            title: "Tickets",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="ticket" color={color} />,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: 900,
            },
            headerTintColor: "white",
          }}
        />
        <Tabs.Screen
          name="scanner"
          options={{
            title: "Scanner",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="camera" color={color} />,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: 900,
            },
            headerTintColor: "white",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: 900,
            },
            headerTintColor: "white",
          }}
        />
      </Tabs>
    </TicketProvider>
  );
}

export default TabLayout;