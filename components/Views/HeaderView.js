import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Header, Input, ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
//import { options, accountMenuItems } from '../../HeaderModel';
import { options } from '../Models/HeaderModel';
import accountMenuItems from '../Models/HeaderModel';
import { useHeader } from '../Controller/HeaderController';

const HeaderView = () => {
    const { 
        sliderVisible, 
        toggleSlider, 
        closeSlider, 
        accountMenuVisible, 
        toggleAccountMenu, 
        handleOptionPress, 
        handleAccountMenuItemPress 
      } = useHeader();
  
  
  const renderSliderContent = () => {
    const options = ['Home', 'Shop', 'Contact', 'My Account'];

    return (
      <Animatable.View
        style={[styles.sliderContainer, styles.slideIn]}
        animation="slideInLeft"
        duration={500}
      >
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#999"
           
          />
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={closeSlider}>
          <FontAwesome name="times" size={24} color="black" />
        </TouchableOpacity>
        {options.map((option, index) => (
          <ListItem key={index} bottomDivider onPress={() => handleOptionPress(option)}>
            <ListItem.Content>
              <ListItem.Title>{option}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
        {accountMenuVisible && (
          <View style={styles.accountMenu}>
          <TouchableOpacity onPress={() => handleAccountMenuItemPress('Orders')} style={styles.menuItem}>
            <Text style={styles.menuText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAccountMenuItemPress('Settings')} style={styles.menuItem}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAccountMenuItemPress('My Wallet')} style={styles.menuItem}>
            <Text style={styles.menuText}>My Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAccountMenuItemPress('Address')} style={styles.menuItem}>
            <Text style={styles.menuText}>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAccountMenuItemPress('Notifications')} style={styles.menuItem}>
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
        </View>
        )}
      </Animatable.View>
    );
  };

  return (
    <View>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={<Text style={styles.deliveryText}>Delivery in 16 minutes</Text>}
        centerComponent={<Input placeholder="Search..." inputContainerStyle={styles.inputContainer} />}
        rightComponent={
          <TouchableOpacity onPress={toggleSlider}>
            <FontAwesome name="bars" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
        }
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={sliderVisible}
        onRequestClose={closeSlider}
      >
        <TouchableOpacity    style={styles.overlay}
    activeOpacity={1}
    onPress={(e) => {
     
      const { locationX, locationY } = e.nativeEvent;

     
      if (
        locationX > closeButtonPosition.left &&
        locationX < closeButtonPosition.right &&
        locationY > closeButtonPosition.top &&
        locationY < closeButtonPosition.bottom
      ) {
       
        closeSlider();
      }
    }}>
          {renderSliderContent()}
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: 'green',
    },
    inputContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
    },
    deliveryText: {
      color: 'white',
      marginLeft: 5,
    },
    icon: {
      marginHorizontal: 10,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    sliderContainer: {
      backgroundColor: 'white',
      width: '90%',
      height: '100%',
      padding: 20,
      position: 'absolute',
      left: 0,
      zIndex: 1,
    },
    searchContainer: {
      marginBottom: 10,
    },
    searchInput: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
    },
    accountMenu: {
      marginTop: 5,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 5,
      fontSize: 18,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      justifyContent: "center",
    },
    slideIn: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    menuItem: {
      marginBottom: 10, 
    },
    menuText: {
      fontSize: 18, // Increase font size
    },
  });

export default HeaderView;
