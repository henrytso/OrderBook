import { StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchBarProps {
    filterText: string;
    onFilterTextChange: (someText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filterText, onFilterTextChange }) => {
    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <Ionicons name="search" size={20} />
                <TextInput
                    style={styles.searchTextInput}
                    placeholder="Search"
                    placeholderTextColor="#999"
                    value={filterText}
                    onChangeText={newText => onFilterTextChange(newText)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#436a80",
        padding: 10,
    },
    barContainer: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 10
    },
    searchTextInput: {
        flex: 1,
        fontSize: 16,
    },
});

export default SearchBar