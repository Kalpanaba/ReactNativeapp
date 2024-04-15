import React, { useState, useEffect } from 'react';
import { View,  StyleSheet, Image ,ScrollView} from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import axios from 'axios';


const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
   
    axios.get('https://hari-hara.onrender.com/get/products')
      .then(response => {
        const activeProducts = response.data.allProducts.filter(product => product.status === 'Active');
        setProducts(activeProducts.slice(0, 4)); 
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
       vertical
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.productContainer}>
        {products.map(product => (
          <Card key={product._id} containerStyle={styles.card}>
            <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>Price: ${product.price}</Text>
            <Button title="ADD" onPress={() => {}}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
           />
          </Card>
        ))}
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    
  },
  buttonStyle: {
    backgroundColor: 'white', 
    paddingHorizontal: 9, 
    paddingVertical: 4,
    borderRadius: 5,
    borderColor: 'green',
    alignSelf: 'flex-end',
    borderWidth: 2, 
    borderColor: 'green', 
    
  },
  titleStyle: {
    color: 'green',
    fontSize: 12,
   
  },
    productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
  },
  card: {
    width: '38%', 
    marginBottom: 10,
  },
  productImage: {
    width: '95%',
    aspectRatio: 4 / 3,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
});

export default Products;
