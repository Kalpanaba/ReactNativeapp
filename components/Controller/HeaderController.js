import { useState } from 'react';

export function useHeader() {
  const [sliderVisible, setSliderVisible] = useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);

  const toggleSlider = () => {
    setSliderVisible(!sliderVisible);
  };

  const closeSlider = () => {
    setSliderVisible(false);
  };

  const toggleAccountMenu = () => {
    setAccountMenuVisible(!accountMenuVisible);
  };

  const handleOptionPress = (option) => {
    if (option === 'My Account') {
      toggleAccountMenu();
    } else {
      switch (option) {
        case 'Home':
          navigation.navigate('HomeScreen');
          break;
        case 'Shop':
          navigation.navigate('ShopScreen');
          break;
        case 'Contact':
          navigation.navigate('ContactScreen');
          break;
        default:
          break;
      }
      closeSlider();
    }
  };

  const handleAccountMenuItemPress = (menuItem) => {
    // Handle actions when the account menu is pressed
    console.log('Clicked on:', menuItem);
  };

  return { 
    sliderVisible, 
    toggleSlider, 
    closeSlider, 
    accountMenuVisible, 
    toggleAccountMenu, 
    handleOptionPress, 
    handleAccountMenuItemPress 
  };
}
