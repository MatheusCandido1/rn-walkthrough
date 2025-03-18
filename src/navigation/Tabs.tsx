import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";
import { Home } from "../views/Home";
import { Settings } from "../views/Settings";
import { Profile } from "../views/Profile";


const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
