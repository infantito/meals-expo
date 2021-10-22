import * as React from 'react'
import { Alert } from 'react-native'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'
import AppLoading from 'expo-app-loading'

import Router from '~router'
import store from '~store'
import { fetchFonts } from '~utils'

const App = () => {
  const [state, setState] = React.useState({
    isFontLoaded: false,
  })

  const updater = (newState: Partial<typeof state>) => {
    setState(prevState => ({ ...prevState, ...newState }))
  }

  const { isFontLoaded } = state

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => updater({ isFontLoaded: true })}
        onError={error => Alert.alert('Error', JSON.stringify(error))}
      />
    )
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default registerRootComponent(App)
