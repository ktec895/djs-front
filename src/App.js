import React, { useState } from 'react'
import { Backdrop, CircularProgress, Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './App.css'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import Content from './Components/Content'

const GET_SHOWS = gql`
  {
    shows {
      name
      imageUrl
      id
    }
  }
`

const light = createMuiTheme({
  palette: {
    primary: {
      main: '#a1fda1',
    },
    text: {
      main: '#000'
    },
    paper: {
      backgroundColor: 'rgba(255, 255, 255, .5)'
    },
    type: 'light'
  },
})

const dark = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    paper: {
      backgroundColor: 'rgba(50, 50, 50, .5)'
    },
    type: 'dark'
  }
})

function App() {
  const { loading, data } = useQuery(GET_SHOWS)
  const [theme, setTheme] = useState(true)
  const [showId, setShowId] = useState('')
  const [mutate] = useMutation(gql`
    mutation {
      toggleOpen @client
    }
  `)

  const toggleOpen = async () => {
    mutate()
  }

  const toggleTheme = () => setTheme(!theme)

  return (
    <MuiThemeProvider theme={theme ? light : dark}>
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
      {!loading && (
        <Sidebar
          shows={data.shows}
          loading={loading}
          toggleOpen={toggleOpen}
          setId={setShowId}
        />
      )}

      <Topbar toggleOpen={toggleOpen} theme={theme} toggleTheme={toggleTheme}/>
      <Grid container style={{height: '100%'}} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <div style={{height: '64px'}} />
        </Grid>
        <Grid item style={{width: '100%'}}>
          <Content showId={showId} />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default App
