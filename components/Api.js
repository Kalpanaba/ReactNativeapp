import axios from 'axios';

const BASE_URL = 'https://hari-hara.onrender.com';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get/products`);
    return response.data.allProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchBanners = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get/banner-images`);
      return response.data.allBanners;
    } catch (error) {
      console.error('Error fetching banners:', error);
      throw error;
    }
  };

