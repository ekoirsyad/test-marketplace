import { Box, Button, Collapsible, Layer } from 'grommet'
import {
  FormClose,
  AppsRounded,
  ChatOption,
  Attachment,
  Search,
} from 'grommet-icons'
import React from 'react'
import SideBarButton from './button'

const SideBar: React.FunctionComponent<{
  showSidebar: boolean
  size: string
  onClick: any
}> = (props) =>
  !props.showSidebar || props.size !== 'small' ? (
    <Collapsible direction={'horizontal'} open={props.showSidebar}>
      <Box flex elevation={'small'} align={'center'} justify={'center'}>
        <SideBarButton
          onClick={() => {}}
          size={props.size}
          icon={<AppsRounded />}
        />
        <SideBarButton
          onClick={() => {}}
          size={props.size}
          icon={<ChatOption />}
        />
        <SideBarButton
          onClick={() => {}}
          size={props.size}
          icon={<Attachment />}
        />
        <SideBarButton onClick={() => {}} size={props.size} icon={<Search />} />
      </Box>
    </Collapsible>
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

export default SideBar
