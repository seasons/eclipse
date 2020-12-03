import * as React from "react"
import { StyleSheet, Text } from "react-native"
import { Box } from "@seasons/eclipse"

export default function App() {
  return (
    <Box style={styles.container}>
      <Text>Typography</Text>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
