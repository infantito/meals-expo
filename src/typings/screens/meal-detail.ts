import * as React from 'react'

import type { ScreenProps } from '~typings/router'
import { Routes } from '~constants'

export type MealDetailProps = ScreenProps<Routes.MEAL_DETAIL>

export type ListItemProps = {
  children: React.ReactNode
}
