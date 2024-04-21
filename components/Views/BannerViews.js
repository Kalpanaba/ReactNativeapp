import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useBanners } from '../Controller/BannerController';

const BannerView = () => {
  const banners = useBanners();
  const windowWidth = Dimensions.get('window').width;

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
        autoplayInterval={3000}
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
    width: '80%',
    aspectRatio: 4 / 3,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default BannerView;
