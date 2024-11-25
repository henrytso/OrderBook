import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Product from "./Product";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
    cart: { [key: number]: number };
    updateCart: (productId: number, count: number) => void;
    onProductPress: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, cart, updateCart, onProductPress }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <ProductCard
                        product={item}
                        cart={cart}
                        onProductPress={onProductPress}
                    />
                }
                numColumns={2}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={styles.column}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    contentContainer: {
        backgroundColor: "#c3d9df",
        padding: 20,
        gap: 20,
    },
    column: {
        gap: 20,
    },
});

export default ProductList;