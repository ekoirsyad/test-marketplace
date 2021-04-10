import { Box, Button, Heading } from 'grommet'
import { Notification, Moon } from 'grommet-icons'
import React from 'react'

const AppBar: React.FunctionComponent<{
  title: string
  onClick: any
  onTheme: any
}> = (props) => {
  return (
    <Box
      tag={'header'}
      direction={'row'}
      align={'center'}
      justify={'between'}
      pad={{ left: 'medium', right: 'small', vertical: 'medium' }}
      elevation={'none'}
      style={{ zIndex: 1 }}>
      <Heading level={3} margin={'none'}>
        {props.title}
      </Heading>
      <Box direction={'row'}>
        <Button icon={<Notification />} onClick={props.onClick} />
        <Button icon={<Moon />} onClick={props.onTheme} />
      </Box>
    </Box>
  )
}

export default AppBar
