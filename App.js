import { NavigationContainer } from "@react-navigation/native";
import Home from "./SRC/Home";
import Bollywood from "./SRC/Bollywood";
import Tollywood from "./SRC/Tollywood";
import Hollywood from "./SRC/Hollywood";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./SRC/Signup";
import Login from "./SRC/Login";
import Brahmastra from "./movies/Brahmastra";
import Vikram from "./movies/Vikram";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Brahmastra" component={Brahmastra} />
        <Stack.Screen name="Vikram" component={Vikram} />
        <Stack.Screen name="Bollywood" component={Bollywood} />
        <Stack.Screen name="Hollywood" component={Hollywood} />
        <Stack.Screen name="Tollywood" component={Tollywood} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
