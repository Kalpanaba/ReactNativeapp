import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderView from './components/Views/HeaderView';
import BannerView from './components/Views/BannerViews';
import ProductsView from './components/Views/ProductsView';
import BottomMenuView from './components/Views/FooterView';
  

export function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider style={{ flex: 1 }}>
        <View style={{ flex: 1 }}> 
          <HeaderView />

          <ScrollView contentContainerStyle={ styles.scrollViewContent}>
          <BannerView />
         <ProductsView />  
          </ScrollView>
          <BottomMenuView />
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
