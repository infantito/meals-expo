import * as React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View } from 'react-native'

import type { RootState } from '~typings/store'
import type { CategoryMealsProps as Props } from '~typings/screens'
import { CATEGORIES } from '~assets/data'
import { DefaultText, MealList } from '~components'

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

const CategoryMeals = (props: Props) => {
  const { route, navigation } = props

  const categoryId = route.params.categoryId

  const availableMeals = useSelector((state: RootState) => state.meals.filteredMeals)

  React.useLayoutEffect(() => {
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    navigation.setOptions({ headerTitle: selectedCategory.title })
  }, [route, navigation])

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.includes(categoryId))

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    )
  }

  return <MealList listData={displayedMeals} />
}

export default CategoryMeals
