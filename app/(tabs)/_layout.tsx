import { TicketProvider } from '@/contexts/TicketContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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
      </Tabs>
    </TicketProvider>
  );
}

export default TabLayout;