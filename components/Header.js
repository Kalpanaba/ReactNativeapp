import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Header, Icon, Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import TogglePage from './Slider';

const CustomHeader = () => {
  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  const handleClose = () => {
    setShowSlider(false);
  };

  return (
    <View>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <View style={styles.leftContainer}>
            <Text style={styles.deliveryText}>Delivery in 16 minutes</Text>
          </View>
        }
        centerComponent={<Input placeholder="Search..." inputContainerStyle={styles.inputContainer} />}
        rightComponent={
          <View style={styles.rightContainer}>
            <FontAwesome name="bars" size={24} color="white" style={styles.icon}  />
          </View>
        }
      />
      {showSlider && (
        <TouchableOpacity style={styles.overlay} onPress={toggleSlider}>
          <TogglePage onClose={handleClose}  />
        </TouchableOpacity>
      )}
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
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
