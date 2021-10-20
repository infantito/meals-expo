import type { CompositeScreenProps } from '@react-navigation/core'

import type { ScreenProps } from '~typings/router'
import { Routes } from '~constants'

export type CategoriesProps = CompositeScreenProps<ScreenProps<Routes.CATEGORIES>, ScreenProps<Routes.CATEGORY_MEALS>>
