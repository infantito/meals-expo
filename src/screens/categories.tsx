import * as React from 'react'
import { ListRenderItemInfo, StyleSheet } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'
import { FlatList } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import type { CategoriesProps as Props } from '~typings/screens'
import type { Category, CategoryId } from '~typings/assets/data'
import { CATEGORIES } from '~assets/data'
import { CategoryGridTile, HeaderButton } from '~components'
import { Routes } from '~constants'

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

const Categories = (props: Props) => {
  const { navigation } = props

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Meal Categories',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer())
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [navigation])

  const navigate = (categoryId: CategoryId) => {
    navigation.navigate(Routes.CATEGORY_MEALS, { categoryId })
  }

  const renderItem = (itemData: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        handleSelect={() => navigate(itemData.item.id)}
      />
    )
  }

  return <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderItem} />
}

export default Categories
