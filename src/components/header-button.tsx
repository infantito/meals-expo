import * as React from 'react'
import { Platform } from 'react-native'
import { HeaderButton as NavigationHeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import type { HeaderButtonProps as Props } from '~typings/components'
import { Colors } from '~constants'

const HeaderButton = (props: Props) => {
  return (
    <NavigationHeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Platform.OS === 'android' ? '#fff' : Colors.primary}
    />
  )
}

export default HeaderButton
