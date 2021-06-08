import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles,Button} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,

    title:{
        flexGrow: 1                    // Se esta indicando que el titulo va a ocupar todo el espacio disponible          
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return ( 
        <div>   
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Información de Ciudades
                    </Typography>
                    <Button variant="text" color="inherit" href='http://localhost:53535/api/historial'>
                        Historial
                    </Button>
                </Toolbar>    
            </AppBar>
                <div className={classes.offset}></div>         
        </div>   
     );
}
 
export default Navbar;