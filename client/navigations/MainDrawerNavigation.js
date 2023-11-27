import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../pages/HomePage";
import StackNavigation from "./StackNavigation";
import style from "../assets/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageComponent } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MainDrawerNavigation() {
  const Drawer = createDrawerNavigator();
  const navigate = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => {
        return {
          drawerContentStyle: style.drawerBackground,
          drawerLabelStyle: style.drawerLabel,
          drawerActiveBackgroundColor: "orange",
          headerStyle: style.drawerTitleBackground,
          headerTitleStyle: style.drawerTitleColor,
          headerLeft: ({}) => {
            return (
              <MaterialCommunityIcons
                name="forwardburger"
                size={34}
                color="white"
                onPress={navigation.toggleDrawer}
                style={style.drawerIcon}
              />
            );
          },
        };
      }}
    >
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Item List" component={StackNavigation} />
    </Drawer.Navigator>
  );
}
