import React from 'react'
import { Typography, Grid, Avatar } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_HOST = gql`
  query($hostId: ID) {
    host(id: $hostId) {
      name
      avatarUrl
    }
  }
`

export default function Host(props) {
  const { loading, data } = useQuery(GET_HOST, {
    variables: {
      hostId: props.id,
    },
  })
  return (
    <React.Fragment>
      {props.id === '' && (
        <Typography variant="body1">
          Press <Menu fontSize="small" /> to select a show
        </Typography>
      )}
      {!loading && data && (
        <React.Fragment>
          <Grid xs={12} item>
            <Grid
              direction="row"
              alignItems="center"
              justify="flex-start"
              spacing={2}
              container
            >
              <Grid item>
                <Avatar
                  style={{ height: '100px', width: '100px', margin: 'auto' }}
                  src={data.host.avatarUrl}
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  <b>{data.host.name}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
