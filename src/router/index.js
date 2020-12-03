import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Categories,
  OnBoarding,
  SignIn,
  SignUp,
  Profile,
  Setting,
  DrawerContent,
  Notification,
  OrderInProgress,
  ConstructionWorks,
  PaymentService,
  CustomerInfo,
  PaymentsCard,
  PaymentsCard2,
} from '../pages';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Category" component={Category} />
    </Drawer.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderInProgress"
        component={OrderInProgress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConstructionWorks"
        component={ConstructionWorks}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentService"
        component={PaymentService}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CustomerInfo"
        component={CustomerInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentsCard"
        component={PaymentsCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentsCard2"
        component={PaymentsCard2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
