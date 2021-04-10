import React, { useState, useMemo } from 'react'
import { Box, Grommet, ResponsiveContext } from 'grommet'
import { grommet } from 'grommet/themes'
import AppBar from './components/AppBar'
import SideBar from './components/SideBar'
import { deepMerge } from 'grommet/utils'
import { generate } from 'grommet/themes/base'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Products from './features/products/Products'
import Detail from './features/detail/Detail'

const themes: { [key: string]: any } = {
  grommet,
}

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [baseSize, setBaseSize] = useState(24)
  const [themeName, setThemeName] = useState('grommet')
  const [themeMode, setThemeMode] = useState<any>('dark')

  const theme = useMemo(
    () => deepMerge(generate(baseSize), themes[themeName]),
    [baseSize, themeName],
  )

  const themeCanMode = useMemo(
    () =>
      theme &&
      theme.global.colors.background &&
      theme.global.colors.background.dark,
    [theme],
  )

  return (
    <BrowserRouter>
      <Grommet full theme={theme} themeMode={themeMode}>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill direction={'row'}>
              <SideBar
                showSidebar={showSidebar}
                size={size}
                onClick={() => setShowSidebar(!showSidebar)}
              />

              <Box flex overflow={{ horizontal: 'hidden' }}>
                <AppBar
                  title={'Test Icube by Sirclo'}
                  onClick={() => setShowSidebar(!showSidebar)}
                  onTheme={() =>
                    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
                  }
                />
                <Box flex align='center' justify='center'>
                  <Switch>
                    <Route exact={true} path={'/'} component={Products} />
                    <Route exact={true} path={'/detail'} component={Detail} />
                  </Switch>
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </BrowserRouter>
  )
}

export default App
