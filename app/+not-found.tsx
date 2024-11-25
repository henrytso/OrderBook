import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Page Not Found" }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go back to Home
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c3d9df",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#ffffff"
    }
});