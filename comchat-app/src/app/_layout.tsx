import React, { useEffect } from "react";
import { Stack } from "expo-router";
import "../global.css";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(auth)" />
            </Stack>
            <Toast />
          </PersistGate>
        </Provider>
    </GestureHandlerRootView>
  );
}
