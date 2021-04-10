import { Box, Button, Collapsible, Layer } from 'grommet'
import { FormClose } from 'grommet-icons'
import React from 'react'

const SideBarButton: React.FunctionComponent<{
  size: string
  icon: any
  onClick: any
}> = (props) =>
  props.size !== 'small' ? (
    <Box pad='small'>
      <Button gap='medium' plain alignSelf='start' icon={props.icon} />
    </Box>
  ) : (
    <Layer>
      <Box tag={'header'} justify={'end'} align={'center'} direction={'row'}>
        <Button icon={<FormClose />} onClick={props.onClick} />
      </Box>
      <Box fill align={'center'} justify={'center'}>
        sidebar
      </Box>
    </Layer>
  )

export default SideBarButton
