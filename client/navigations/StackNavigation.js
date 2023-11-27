import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemList from "../pages/ItemList";
import ItemDetail from "../pages/ItemDetail";

const Stack = createNativeStackNavigator()

export default function StackNavigation() {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Item List Stack" component={ItemList} />
            <Stack.Screen name="Item Detail" component={ItemDetail} />
        </Stack.Navigator>
    )
}