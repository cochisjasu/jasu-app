import { Box, Typography, Button, TextField, FormLabel, makeStyles, CircularProgress } from "@material-ui/core";
import { Fragment, useContext } from "react";

import { Context } from "../App";
import { StyledButton, StyledTextField } from "../StyledComponents";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingInline: theme.spacing(2),
        marginBlock: theme.spacing(10),
        alignItems: 'stretch',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            maxWidth: 600,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 800,
        }
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: 30,
        lineHeight: '60px',
        textAlign: 'center',

        [theme.breakpoints.up('sm')]: {

            fontSize: 35,
        }
    },

}));

export default function Notice({ children }) {
    console.log('children', children)
    const classes = useStyles();
    const { dictionary } = useContext(Context);

    return (
        <Box className={classes.root}>
            <Typography variant="h1" component="h1" className={classes.title}>{dictionary.nav.notice}</Typography>
            <div>
                {
                    dictionary.nav.notice == 'Privacy Notice' ?

                        <embed src="/pdf/Jasu - Privacy Policy.pdf" type="application/pdf" width="100%" height="600" />
                        :
                        <embed src="/pdf/Jasu - Aviso de privacidad.pdf" type="application/pdf" width="100%" height="600" />

                }


            </div>


        </Box>
    );
};