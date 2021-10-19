import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

import type { DefaultTextProps as Props } from '~typings/components'

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
})

const DefaultText = (props: Props) => {
  const { children } = props

  return <Text style={styles.text}>{children}</Text>
}

export default DefaultText
