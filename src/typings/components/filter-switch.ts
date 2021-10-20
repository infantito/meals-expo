import { SwitchProps } from 'react-native'

export type FilterSwitchProps = {
  label: string
  status: SwitchProps['value']
  handleChange: SwitchProps['onValueChange']
}
