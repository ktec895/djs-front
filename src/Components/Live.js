import React from 'react'
import { Grid } from '@material-ui/core'

export default function Live() {
    return (
        <React.Fragment>
            <Grid item>
                <audio controls='controls'>
                    <source src="http://kteclive.oit.edu:8000/live.mp3" type="audio/mpeg" />
                </audio>
            </Grid>
        </React.Fragment>
    )
}
