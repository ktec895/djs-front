import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Grid, Paper, makeStyles, useTheme } from '@material-ui/core'
import Show from './Show'
import Live from './Live'
import Host from './Host'

const useStyles = makeStyles({
    content: {
        padding: '15px',
    }
})

export default function Content(props) {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Container>
            <Paper elevation={2} className={classes.content} style={{backgroundColor: theme.palette.paper.backgroundColor}}>
                <Grid container direction='column' justify='center' alignItems='flex-start' alignContent='center' spacing={1}>
                    <Route path='/' exact>
                        <Live />
                    </Route>
                    <Route path='/show'>
                        <Show id={props.showId} setHostId={props.setHostId}/>
                    </Route>
                    <Route path='/host'>
                        <Host id={props.hostId} />
                    </Route>
                </Grid>  
            </Paper>  
        </Container>
    )
}
