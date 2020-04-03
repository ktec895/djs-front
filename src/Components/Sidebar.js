import React from "react"
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles
} from "@material-ui/core"
import { ChevronLeft, PlayCircleFilled } from "@material-ui/icons"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { useHistory } from 'react-router-dom'
import ShowSelect from './ShowSelect'

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  listItem: {
    "&:hover": {
      backgroundColor: "lightGrey"
    }
  }
}))

export default function Sidebar(props) {
  const { data } = useQuery(gql`
    {
      sidebarOpen @client
    }
  `)
  const classes = useStyles()
  const history = useHistory()

  return (
    <Drawer
      open={data.sidebarOpen}
      onClose={props.toggleOpen}
      variant="persistent"
      anchor="left"
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.toggleOpen}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem onClick={() => history.push('/')}className={classes.listItem}>
          <ListItemAvatar>
            <Avatar>
              <PlayCircleFilled color='white'/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText>Listen Live</ListItemText>
        </ListItem>
        <Divider />
        {!props.loading &&
          props.shows.map((show, index) => (
            <ShowSelect key={index} show={show} setId={props.setId}/>
          ))}
      </List>
    </Drawer>
  )
}
