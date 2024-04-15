


import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from './components/Header';
import BottomMenu from './components/Footer';
import Products from './components/Products';
import Banner from './components/Banner';

export function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CustomHeader />
          <ScrollView contentContainerStyle={ styles.scrollViewContent}>
            <Banner />
            <Products />
          </ScrollView>
          <BottomMenu />
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
});

export default App;
