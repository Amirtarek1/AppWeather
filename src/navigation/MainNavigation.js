import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../screens/Auth/LoginPage";
import SignupPage from "../screens/Auth/SignupPage";
import WeatherPage from "../screens/Home/WeatherPage";
import { COLORS } from "../constants/themes";
import { StatusBar } from "react-native";

const Rockstack = createStackNavigator();

function MainNavigation() {
    return (
        <>
            <StatusBar backgroundColor={COLORS.black} barStyle={'default'} />

            <Rockstack.Navigator
                initialRouteName="LoginPage"
                screenOptions={{ headerShown: false }}
            >

                <Rockstack.Screen name="LoginPage"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />

                <Rockstack.Screen name="SignupPage"
                    component={SignupPage}
                    options={{ headerShown: false }}
                />

                <Rockstack.Screen name="WeatherPage"
                    component={WeatherPage}
                    options={{ headerShown: false }}
                />

            </Rockstack.Navigator>
        </>
    );
}

export default MainNavigation;