import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const BottomMenu = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home" type="ionicon" size={24} color="black" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="basket" type="ionicon" size={24} color="black" />
          <Text style={styles.menuText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="person" type="ionicon" size={24} color="black" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
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
      height: -2, // Adjust the shadow offset as needed
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

export default BottomMenu;
