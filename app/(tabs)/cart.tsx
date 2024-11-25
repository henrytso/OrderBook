import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function CartScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cart Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c3d9df",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#ffffff",
    }
});