import * as React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

import type { MealItemProps as Props } from '~typings/components'
import DefaultText from './default-text'

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    height: 200,
    marginVertical: 8,
    overflow: 'hidden',
    width: '100%',
  },
  bgImage: {
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    alignItems: 'center',
    height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  title: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
  },
})

const MealItem = (props: Props) => {
  const { meal, handleSelect } = props

  return (
    <Pressable style={styles.mealItem} onPress={handleSelect}>
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: meal.imageUrl }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {meal.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{meal.duration}m</DefaultText>
          <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
    </Pressable>
  )
}

export default MealItem
