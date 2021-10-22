import * as React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import type { RootState } from '~typings/store'
import type { FavoritesProps as Props } from '~typings/screens'
import { DefaultText, HeaderButton, MealList } from '~components'

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

const FavoritesScreen = (props: Props) => {
  const { navigation } = props

  const favoriteMeals = useSelector((state: RootState) => state.meals.favoriteMeals || [])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Your Favorites',
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

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    )
  }

  return <MealList listData={favoriteMeals} />
}

export default FavoritesScreen
