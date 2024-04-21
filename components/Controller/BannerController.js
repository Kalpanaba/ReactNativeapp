import { useState, useEffect } from 'react';
import { getActiveBanners } from '../Models/BannerModel';

export function useBanners() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const activeBanners = await getActiveBanners();
      setBanners(activeBanners);
    }

    fetchData();
  }, []);

  return banners;
}
