import React from 'react'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  makeStyles
} from '@material-ui/core'
import { Radio } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: 'lightGrey'
    }
  }
}))

export default function ShowSelect(props) {
  const classes = useStyles()
  const history = useHistory()

  const loadShow = async () => {
      props.setId(props.show.id)
      history.push('/show')
  }

  return (
    <ListItem onClick={loadShow} className={classes.listItem}>
      <ListItemAvatar>
        { props.show.imageUrl ? 
          <Avatar src={props.show.imageUrl} /> :
          <Avatar><Radio color='inherit'/></Avatar>}
      </ListItemAvatar>
      <ListItemText>{props.show.name}</ListItemText>
    </ListItem>
  )
}
