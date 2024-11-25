import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import Foundation from '@expo/vector-icons/Foundation';

import Product from "./Product";
import PriceRow from "./PriceRow";

interface ProductCardProps {
    product: Product;
    cart: { [key: number]: number };
    onProductPress: (product: Product) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ product, cart, onProductPress }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (product !== null && product.id in cart) {
            setCount(cart[product.id]);
        }
        else {
            setCount(0);
        }
    }, [cart]);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} />
                {product.discounted_price !== "" &&
                    <Foundation style={styles.saleIcon} name="burst-sale" size={48} color="#8af6ac" />
                }
                <Pressable style={styles.addButton} onPress={() => onProductPress(product)}>
                    <View style={styles.countContainer}>
                        <Text style={styles.count}>{count > 0 ? String(count) : "+"}</Text>
                    </View>
                </Pressable>
            </View>
            <Text style={styles.supplierLabel}>
                {product.supplier}
            </Text>
            <Text style={styles.productNameLabel}>
                {product.name}
            </Text>
            <PriceRow price={product.price} discountedPrice={product.discounted_price} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 12,
    },
    imageContainer: {
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
    },
    saleIcon: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    addButton: {
        position: "absolute",
        bottom: 0,
        right: 10,
    },
    supplierLabel: {
        fontSize: 12,
        textDecorationLine: "underline",
        color: "#6fb0d5",
    },
    productNameLabel: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#436a80",
    },
    countContainer: {
        backgroundColor: "#436a80",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%"
    },
    count: {
        fontSize: 20,
        color: "#ffffff",
    },
});

export default ProductCard;