import * as React from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { Colors } from '~constants'

import type { FilterSwitchProps as Props } from '~typings/components'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    width: '80%',
  },
})

const FilterSwitch = (props: Props) => {
  const { handleChange, label, status } = props

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        value={status}
        onValueChange={handleChange}
      />
    </View>
  )
}

export default FilterSwitch
