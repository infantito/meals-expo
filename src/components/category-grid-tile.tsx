import * as React from 'react'
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native'

import type { CategoryGridTileProps as Props } from '~typings/components'

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 8,
    elevation: 5,
    flex: 1,
    height: 150,
    margin: 16,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
  },
  container: {
    alignItems: 'flex-end',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right',
  },
})

const CategoryGridTile = (props: Props) => {
  const { color, handleSelect, title } = props

  return (
    <Pressable style={styles.gridItem} onPress={handleSelect}>
      <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

export default CategoryGridTile
