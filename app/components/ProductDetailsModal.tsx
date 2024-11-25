import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Modal, Pressable, Button, TextInput } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";

import Product from "./Product";
import PriceRow from "./PriceRow";

interface ProductDetailsModalProps {
    product: Product | null;
    cart: { [key: number]: number };
    updateCart: (productId: number, count: number) => void;
    isVisible: boolean;
    onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, cart, updateCart, isVisible, onClose }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (product !== null && product.id in cart) {
            setCount(cart[product.id]);
        }
        else {
            setCount(0);
        }
    }, [product]);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(Math.max(0, count - 1));
    };

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text></Text>
                    <Pressable onPress={onClose}>
                        <Ionicons name="close" color="#000000" size={30} />
                    </Pressable>
                </View>
                {product &&
                    <View style={styles.bodyContainer}>
                        <View style={styles.productInfoContainer}>
                            <Image source={{ uri: product.image }} style={styles.image} />
                            <View style={styles.productInfo}>
                                <Text>
                                    {product.name}
                                </Text>
                                <Text>
                                    Unit Size: {product.unit_size} ct
                                </Text>
                                <PriceRow price={product.price} discountedPrice={product.discounted_price} />
                            </View>
                        </View>
                    </View>
                }
                {product && cart &&
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantityLabel}>
                            Quantity
                        </Text>
                        <View style={styles.quantityEditArea}>
                            <Pressable>
                                <Button title=" - " onPress={decrementCount} />
                            </Pressable>
                            <TextInput style={styles.quantityTextInput} value={String(count)} editable={false} />
                            <Pressable>
                                <Button title=" + " onPress={incrementCount} />
                            </Pressable>
                        </View>
                    </View>
                }
                {product && cart &&
                    <View style={styles.addToCartContainer}>
                        <Pressable style={styles.addToCartButton} onPress={() => updateCart(product.id, count)}>
                            <Text style={styles.addToCartText}>Add to Cart</Text>
                        </Pressable>
                    </View>
                }
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '44%',
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        position: 'absolute',
        bottom: 0,
        color: "black",
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#ffffff',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bodyContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 10,
    },
    productInfoContainer: {
        flex: 1,
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 100,
    },
    productInfo: {
        flex: 1,
        alignContent: "space-between",
    },
    priceRow: {
        flex: 1,
        flexDirection: "row",
    },
    defaultPrice: {
        color: "#436a80",
    },
    discountedPrice: {
        color: "green",
        fontWeight: "bold",
    },
    discountedFromPrice: {
        color: "red",
        textDecorationLine: "line-through",
    },
    quantityContainer: {
        flex: .5,
        flexDirection: "row",
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
    },
    quantityLabel: {
        flex: .6,
        fontSize: 18,
        fontWeight: "bold",
        color: "#436a80",
    },
    quantityEditArea: {
        flex: .275,
        flexDirection: "row",
        borderColor: "#436a80",
        borderRadius: 8,
        borderWidth: 2,
    },
    quantityTextInput: {
        fontSize: 18,
    },
    addToCartContainer: {
        flex: .5,
        flexDirection: "row",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    addToCartButton: {
        backgroundColor: '#c3d9df',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    addToCartText: {
        fontSize: 20,
        color: "#436a80",
    },
});

export default ProductDetailsModal;