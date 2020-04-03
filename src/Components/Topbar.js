import React from 'react'
import { AppBar, Toolbar, IconButton, Switch } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

export default function Topbar(props) {
  return (
    <React.Fragment>
      <AppBar style={{ background: 'transparent' }}>
        <Toolbar>
          <div style={{ flex: 1 }}>
            <IconButton onClick={props.toggleOpen} style={{ color: 'white' }}>
              <Menu />
            </IconButton>
          </div>
          <Switch
            checked={props.theme}
            onChange={props.toggleTheme}
            color='default'
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
