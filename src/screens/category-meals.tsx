import * as React from 'react'

import type { CategoryMealsProps as Props } from '~typings/screens'
import { CATEGORIES, MEALS } from '~assets/data'
import { MealList } from '~components'

const CategoryMeals = (props: Props) => {
  const { route, navigation } = props

  const categoryId = route.params.categoryId

  React.useLayoutEffect(() => {
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    navigation.setOptions({ headerTitle: selectedCategory.title })
  }, [route, navigation])

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

  return <MealList listData={displayedMeals} />
}

export default CategoryMeals
