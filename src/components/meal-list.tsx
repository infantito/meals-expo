import * as React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native'

import type { Meal, MealId } from '~typings/assets/data'
import type { RootStackParamList } from '~typings/router'
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

  const navigate = (mealId: MealId) => {
    navigation.navigate(Routes.MEAL_DETAIL, { mealId })
  }

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealItem meal={itemData.item} handleSelect={() => navigate(itemData.item.id)} />
  }

  return (
    <View style={styles.list}>
      <FlatList data={listData} keyExtractor={item => item.id} renderItem={renderMealItem} style={{ width: '100%' }} />
    </View>
  )
}

export default MealList
