// ProductController.js
import { useState, useEffect } from 'react';
import { getActiveProducts } from '../Models/ProductModel';

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const activeProducts = await getActiveProducts();
      setProducts(activeProducts);
    }

    fetchProducts();
  }, []);

  return products;
}
