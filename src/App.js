import React from 'react';
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'red',
    },
    header: {
        margin: '15px auto 15px',
        paddingBottom: '5px',
        borderBottom: "2px solid grey",
        color: 'red',
    },
    container__tab: {
        flexGrow: 1,
        margin: '5px auto',
    },
    title: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    subtitle: {
        color: 'red',
        fontWeight: 'bold',
    },
    paper__title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '15px',
    }
}));

const App = observer(({ changeData }) => {

    const classes = useStyles();


    const basaSp = changeData.data.map(el => el.sp)
    const maxData = Math.max(...basaSp)
    const perform = changeData.data.filter(el => el.sp === maxData);
    const name_perform = perform[0].name

    const sum = basaSp.reduce((a, b) => a + b)


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root}>
                <Typography className={classes.header}>SPRINT BOARD</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            onClick={() => changeData.clearData()}
                        >
                            Clear Table
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => changeData.addData()}
                        >
                            Add record
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>NAME:</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>SP:</Paper>
                    </Grid>
                    {
                        changeData.data.map(el => {
                            return (
                                <Grid key={el.name} container spacing={3} className={classes.container__tab}>
                                    <Grid item xs={6} >
                                        <Paper className={classes.paper}>{el.name}</Paper>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Paper className={classes.paper}>{el.sp}</Paper>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                    <Grid item xs={6} className={classes.title}>
                        <Typography className={classes.subtitle}>TEAM SP:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper__title}>{sum}</Paper>
                    </Grid>
                    <Grid item xs={6} className={classes.title} >
                        <Typography className={classes.subtitle}>TOP PERFORMER:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper__title}>NAME: {name_perform}</Paper>
                    </Grid>

                </Grid>
            </Container>
        </React.Fragment>
    );
}
)

export default App;