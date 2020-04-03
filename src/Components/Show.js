import React from 'react'
import {
  Backdrop,
  CircularProgress,
  Grid,
  Typography,
  Avatar,
  Chip,
  Button
} from '@material-ui/core'
import { Radio } from '@material-ui/icons'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_SHOW = gql`
  query($showId: ID) {
    show(id: $showId) {
      name
      description
      imageUrl
      genre
      hosts {
        name
        avatarUrl
      }
    }
  }
`

export default function Show(props) {
  const { loading, data } = useQuery(GET_SHOW, {
    variables: {
      showId: props.id
    }
  })

  return (
    <React.Fragment>
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
      {!loading && data && (
        <React.Fragment>
          {/* <Grid xs={6} item>
            { data.show.imageUrl ?
              <Avatar style={{height: '200px', width: '200px', margin: 'auto'}} src={data.show.imageUrl} /> :
              <Avatar style={{height: '200px', width: '200px', margin: 'auto'}}><Radio style={{height: '70%', width: '70%'}}/></Avatar> 
            }
          </Grid>
          <Grid xs={6} item>
            { data.show.imageUrl ?
              <Avatar style={{height: '200px', width: '200px', margin: 'auto'}} src={data.show.imageUrl} /> :
              <Avatar style={{height: '200px', width: '200px', margin: 'auto'}}><Radio style={{height: '70%', width: '70%'}}/></Avatar> 
            }
          </Grid> */}
          <Grid xs={12} item>
            <Grid direction='row' alignItems='center' justify='flex-start' spacing={2} container>
              <Grid item>
                {data.show.imageUrl ? (
                  <Avatar
                    style={{ height: '100px', width: '100px', margin: 'auto' }}
                    src={data.show.imageUrl}
                  />
                ) : (
                  <Avatar
                    style={{ height: '100px', width: '100px', margin: 'auto' }}
                  >
                    <Radio style={{ height: '70%', width: '70%' }} />
                  </Avatar>
                )}
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  <b>{data.show.name}</b>
                </Typography>
                <Typography variant="subtitle1">{data.show.genre}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid xs={12} item>
            <Typography variant="h5">
              <b>{data.show.name}</b>
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography variant="subtitle1">{data.show.genre}</Typography>
          </Grid> */}
          <Grid xs={12} item>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              {data.show.hosts.map((host, index) => (
                <Chip
                  style={{ margin: '10px' }}
                  key={index}
                  avatar={<Avatar src={host.avatarUrl} />}
                  label={host.name}
                />
              ))}
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography
              style={{
                textAlign: 'left',
                maxHeight: '10vh',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              variant="body2"
            >
              {data.show.description}
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Button
              style={{ background: 'transparent' }}
              color="primary"
              variant="text"
            >
              Show more
            </Button>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
