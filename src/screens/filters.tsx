import * as React from 'react'
import { useDispatch } from 'react-redux'
import { DrawerActions } from '@react-navigation/routers'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import type { FiltersProps as Props, FiltersState } from '~typings/screens'
import { setFilters } from '~store'
import { FilterSwitch, HeaderButton } from '~components'

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
})

const Filters = (props: Props) => {
  const { navigation } = props

  const [state, setState] = React.useState<FiltersState>({
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  })

  const updater = (newState: Partial<typeof state>) => {
    setState(prevState => ({ ...prevState, ...newState }))
  }

  const dispatch = useDispatch()

  const { isGlutenFree, isLactoseFree, isVegan, isVegetarian } = state

  const handleFilters = () => {
    dispatch(setFilters(state))
  }

  React.useEffect(() => {
    navigation.setParams({ filters: state })

    navigation.setOptions({
      headerTitle: 'Filter Meals',
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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={handleFilters} />
        </HeaderButtons>
      ),
    })
  }, [navigation, state])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        status={isGlutenFree}
        handleChange={newValue => updater({ isGlutenFree: newValue })}
      />
      <FilterSwitch
        label="Lactose-free"
        status={isLactoseFree}
        handleChange={newValue => updater({ isLactoseFree: newValue })}
      />
      <FilterSwitch label="Vegan" status={isVegan} handleChange={newValue => updater({ isVegan: newValue })} />
      <FilterSwitch
        label="Vegetarian"
        status={isVegetarian}
        handleChange={newValue => updater({ isVegetarian: newValue })}
      />
    </View>
  )
}

export default Filters
