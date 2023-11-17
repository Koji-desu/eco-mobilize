import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import ConfirmAluguel from "./pages/ConfirmAluguel";
import carBYDTan from "./pages/Carros/BYDTan";
import carNissanLeaf from "./pages/Carros/NissanLeaf";
import carMiniCooper from "./pages/Carros/MiniCooper";
import carJumpy from "./pages/Carros/Jumpy";
import carExpert from "./pages/Carros/Expert";
import carKangoo from "./pages/Carros/Kangoo";

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
            component={carBYDTan}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="carNissanLeaf"
            component={carNissanLeaf}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carMiniCooper"
            component={carMiniCooper}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carJumpy"
            component={carJumpy}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carExpert"
            component={carExpert}
            options={{headerShown: false}}
           />

           <Stack.Screen
            name="carKangoo"
            component={carKangoo}
            options={{headerShown: false}}
           />
        </Stack.Navigator>
    )
}