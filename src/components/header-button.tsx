import * as React from 'react'
import { Platform } from 'react-native'
import { HeaderButton as NavigationHeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import type { HeaderButtonProps as Props } from '~typings/components'
import { Colors, isAndroid } from '~constants'

const HeaderButton = (props: Props) => {
  return (
    <NavigationHeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={isAndroid ? '#fff' : Colors.primary}
    />
  )
}

export default HeaderButton
