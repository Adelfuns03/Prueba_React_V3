import {createMuiTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'


const theme = createMuiTheme({
    pallete: {
        primary: {
            main: purple[500]                        //Codigo del color elegido, acorde a la paleta de colores, entese caso gris
        }
    }

})

export default theme;