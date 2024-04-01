import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeWhatsApp';
import Chat from './PersonalChat';
import PostApi from './API/PostApi';
import Login from './API/Login';
import SignupPostApi from './API/SignupPostApi';
import HomeApi from './API/HomeApi';
import LoginPostApi from './API/LoginPostApi'
import MainPractice from './MainPractice';
import BAss2 from './Assignments/BAss2';
import ReadyStates from './practice/ReadyStates';
import ChangeMode from './practice/ChangeMode';
import ChangeModeHome from './practice/ChangeModeHome';
import ChangeFontHome from './practice/ChangeFontHome';
import ChangeFont from './practice/ChangeFont';
import FireBaseLogin from './FireBasics/FireBaseLogin';
import UserLoginPage from './FireBasics/UserLoginPage';
import AdminLoginPage from './FireBasics/AdminLoginPage';
import FireBaseSignup from './FireBasics/FireBaseSignup';
import HomeCustomHook from './CustomHooks/Home';
import NewCustomHook from './CustomHooks/NewCustomHook';
import GetApi from './API/GetApi';
import AppNavigation from './FireBasics/AppNavigation';
import NotificationsScreen from './FireBasics/Components/NotificationScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator>


        <Stack.Screen 
          name="Exploring" 
          component={MainPractice}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="SignupPostApi" 
          component={SignupPostApi}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="LoginPostApi" 
          component={LoginPostApi}
          options={{
            headerShown:true
          }}
        />  

        <Stack.Screen 
          name="BAss2" 
          component={BAss2}
          options={{
            headerShown:true
          }}
        />      

        <Stack.Screen 
          name="HomeApi" 
          component={HomeApi}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown:true
          }}
        />      

        <Stack.Screen 
          name="PostApi" 
          component={PostApi}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="Chat" 
          component={Chat}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="ReadyStates" 
          component={ReadyStates}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="ChangeModeHome" 
          component={ChangeModeHome}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="ChangeMode" 
          component={ChangeMode}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="ChangeFontHome" 
          component={ChangeFontHome}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="ChangeFont" 
          component={ChangeFont}
          options={{
            headerShown:true
          }}
        />

<Stack.Screen 
          name="FireBaseSignup" 
          component={FireBaseSignup}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen 
          name="FireBaseLogin" 
          component={FireBaseLogin}
          options={{
            headerShown:true
          }}
        />

        <Stack.Screen 
          name="UserLoginPage" 
          component={UserLoginPage}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen 
          name="AdminLoginPage" 
          component={AdminLoginPage}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen 
          name="HomeCustomHook" 
          component={HomeCustomHook}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen 
          name="NewCustomHook" 
          component={NewCustomHook}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen 
          name="GetApi" 
          component={GetApi}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen 
          name="AppNavigation" 
          component={AppNavigation}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name="NotificationsScreen" 
          component={NotificationsScreen}
          options={{
            headerShown:true
          }}
        />



      </Stack.Navigator>

    </NavigationContainer>
  );
}

