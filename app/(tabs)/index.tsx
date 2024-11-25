import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import SearchBar from "../components/SearchBar";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import ProductDetailsModal from "../components/ProductDetailsModal";

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [filterText, setFilterText] = useState("");
  const [isProductDetailsModalVisible, setIsProductDetailsModalVisible] = useState<boolean>(false);
  const [focusedProduct, setFocusedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      const response = await fetch("https://retoolapi.dev/f0ee0v/items");
      const data: Product[] = await response.json();
      const cleanedData = data.filter((product) => product.name !== null);
      setProducts(cleanedData);
    };
    fetchProductsData();
  }, []);


  const updateCart = (productId: number, count: number) => {
    const newCart = { ...cart, [productId]: count };
    if (newCart[productId] === 0) {
      delete newCart[productId];
    }
    setCart(newCart);
    console.log(newCart);
  };

  return (
    <View style={styles.container}>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      {products &&
        <ProductList
          products={products.filter((product) =>
            product.name.toLowerCase().includes(filterText.toLowerCase())
          )}
          cart={cart}
          updateCart={updateCart}
          onProductPress={(product: Product) => {
            setFocusedProduct(product);
            setIsProductDetailsModalVisible(true);
          }}
        />
      }
      <ProductDetailsModal
        product={focusedProduct}
        cart={cart}
        updateCart={updateCart}
        isVisible={isProductDetailsModalVisible}
        onClose={() => setIsProductDetailsModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#436a80",
  },
  text: {
    color: "#ffffff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffffff",
  }
});

export default HomeScreen;