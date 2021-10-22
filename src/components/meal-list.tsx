import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native'

import type { Meal } from '~typings/assets/data'
import type { MealDetailParams, RootStackParamList } from '~typings/router'
import type { RootState } from '~typings/store'
import type { MealListProps as Props } from '~typings/components'
import { Routes } from '~constants'
import MealItem from './meal-item'

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
})

const MealList = (props: Props) => {
  const { listData } = props

  const navigation = useNavigation<RootStackParamList<Routes.MEAL_DETAIL>>()

  const favoriteMeals = useSelector((state: RootState) => state.meals.favoriteMeals)

  const navigate = (mealDetailParams: MealDetailParams) => {
    navigation.navigate(Routes.MEAL_DETAIL, mealDetailParams)
  }

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    const { item } = itemData

    const isFavoriteMeal = favoriteMeals.some(meal => meal.id === item.id)

    const params = { mealId: item.id, mealTitle: item.title, isFavoriteMeal }

    return <MealItem meal={item} handleSelect={() => navigate(params)} />
  }

  return (
    <View style={styles.list}>
      <FlatList data={listData} keyExtractor={item => item.id} renderItem={renderMealItem} style={{ width: '100%' }} />
    </View>
  )
}

export default MealList
