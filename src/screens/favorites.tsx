import * as React from 'react'
import { DrawerActions } from '@react-navigation/routers'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import type { FavoritesProps as Props } from '~typings/screens'
import { MEALS } from '~assets/data'
import { HeaderButton, MealList } from '~components'

const FavoritesScreen = (props: Props) => {
  const { navigation } = props

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

  /**
   * @todo the next line should be dynamic
   */
  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  return <MealList listData={favoriteMeals} />
}

export default FavoritesScreen
