import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up ./src/app.tsx to start working on meal app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default registerRootComponent(App)
