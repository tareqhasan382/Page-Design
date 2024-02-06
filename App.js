import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/sections/Home";
import Profile from "./src/sections/Profile";
import { useCallback, useMemo, useState } from "react";
import DarkTheme from "./src/theme/DarkTheme";
import LightTheme from "./src/theme/LightTheme";
import { AppContext } from "./src/theme/AppContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Covid from "./src/sections/Covid";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const Stack = createStackNavigator();
  const appContext = useMemo(() => {
    return { isDarkTheme, setIsDarkTheme };
  });
  const [fontLoaded, fontError] = useFonts({
    "Antonio-Medium": require("./src/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./src/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular": require("./src/fonts/LeagueSpartan-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) {
    // console.log("null");
    return null;
  }

  return (
    <NavigationContainer
      onLayout={onLayoutRootView}
      theme={isDarkTheme ? DarkTheme : LightTheme}
    >
      <AppContext.Provider value={appContext}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Covid" component={Covid} />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
}
