import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { menuItems } from '../Models/FooterModels';
import { handleMenuItemPress } from '../Controller/FooterController';

const BottomMenuView = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem} 
            onPress={() => handleMenuItemPress(item.name)}>
            <Icon name={item.iconName} type="ionicon" size={24} color="black" />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2, 
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default BottomMenuView;
