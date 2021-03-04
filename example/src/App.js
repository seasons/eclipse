import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Box } from "@seasons/eclipse";
export default function App() {
    return (React.createElement(Box, { style: styles.container },
        React.createElement(Text, null, "Typography Test")));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
