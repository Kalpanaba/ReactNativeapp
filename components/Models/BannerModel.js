import { fetchBanners } from '../Api';

export async function getActiveBanners() {
  try {
    const allBanners = await fetchBanners(); 
    return allBanners.filter(banner => banner.status === 'Active').slice(0, 4);
  } catch (error) {
    console.error('Error fetching banners:', error);
    return [];
  }
}