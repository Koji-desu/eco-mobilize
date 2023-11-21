import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import ConfirmAluguel from "./pages/ConfirmAluguel";
import CarBYDTan from "./pages/Carros/BYDTan";
import CarNissanLeaf from "./pages/Carros/NissanLeaf";
import CarMiniCooper from "./pages/Carros/MiniCooper";
import CarJumpy from "./pages/Carros/Jumpy";
import CarExpert from "./pages/Carros/Expert";
import CarKangoo from "./pages/Carros/Kangoo";

const Stack = createNativeStackNavigator()

export default function Router(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}   
                options={{headerShown: false}}
           />

           <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}

           />
           <Stack.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="ConfirmAluguel"
            component={ConfirmAluguel}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carBYDTan"
            component={CarBYDTan}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="carNissanLeaf"
            component={CarNissanLeaf}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carMiniCooper"
            component={CarMiniCooper}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carJumpy"
            component={CarJumpy}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carExpert"
            component={CarExpert}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carKangoo"
            component={CarKangoo}
            options={{headerShown: false}}
           />
        </Stack.Navigator>
    )
}