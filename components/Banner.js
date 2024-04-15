import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    // Fetch banner images
    axios.get('https://hari-hara.onrender.com/get/banner-images')
      .then(response => {
        const activeBanners = response.data.allBanners.filter(banner => banner.status === 'Active');
        setBanners(activeBanners.slice(0, 4)); // Display only first 4 active banners
      })
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.bannerContainer}>
      <Image source={{ uri: item.bannerImageUrl }} style={styles.bannerImage} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={banners}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        autoplay={true}
        loop={true}
        autoplayInterval={3000} // Adjust autoplay interval as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '80%', // Adjust the width of the banner image
    aspectRatio: 4 / 3,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default Banner;
