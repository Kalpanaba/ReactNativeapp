import { getProducts } from '../Api';

export async function getActiveProducts() {
  try {
    const allProducts = await getProducts();
    return allProducts.filter(product => product.status === 'Active').slice(0, 4);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
