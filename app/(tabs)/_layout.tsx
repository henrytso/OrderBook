import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#436a80",
                headerStyle: {
                    backgroundColor: "#436a80",
                },
                headerTintColor: "#ffffff",
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitle: "Order Book",
                    headerTitleAlign: "left",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    headerTitle: "Shopping Cart",
                    headerTitleAlign: "left",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "cart" : "cart-outline"} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}