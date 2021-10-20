import * as React from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import type { ListItemProps, MealDetailProps as Props } from '~typings/screens'
import { MEALS } from '~assets/data'
import { DefaultText, HeaderButton } from '~components'

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 12,
    padding: 12,
  },
})

const ListItem = (props: ListItemProps) => {
  const { children } = props

  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  )
}

const MealDetail = (props: Props) => {
  const { route, navigation } = props

  const mealId = route.params.mealId

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              Alert.alert('Favorite', 'Mark as favorite!', [{ text: 'Accept', style: 'default' }])
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [navigation])

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

export default MealDetail
