import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head  from 'next/head'
import React, { Children } from 'react'
import useStyles from '../utils/styles'
export default function Layout( {children}) {
    const classes = useStyles();

  return (
    <div>
        <Head>
        <title>next amazon</title>
        </Head>
        <AppBar position='static' className={classes.navbar}>
            <Toolbar>
                <Typography>amazon</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>
            {children}
        </Container>
        <footer className= {classes.footer}>
            <Typography >
                all rights reserved. next amazon 
            </Typography>
        </footer>
    </div>
  )
}
