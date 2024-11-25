import { Text, View, StyleSheet } from "react-native";

interface PriceRowProps {
    price: string;
    discountedPrice: string;
}

const PriceRow: React.FC<PriceRowProps> = ({ price, discountedPrice }) => {
    if (discountedPrice !== "") {
        return (
            <View style={styles.priceRow}>
                <Text>
                    Price:
                </Text>
                <Text style={styles.discountedPrice}>
                    ${discountedPrice}
                </Text>
                <Text style={styles.discountedFromPrice}>
                    ${price}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.priceRow}>
            <Text>
                Price:
            </Text>
            <Text style={styles.defaultPrice}>
                ${price}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    priceRow: {
        flex: 1,
        flexDirection: "row",
    },
    defaultPrice: {
        color: "#436a80",
    },
    discountedPrice: {
        color: "#2bef69",
        fontWeight: "bold",
    },
    discountedFromPrice: {
        color: "red",
        textDecorationLine: "line-through",
    },
});

export default PriceRow;