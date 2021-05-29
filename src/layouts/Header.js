import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import {Avatar, Box} from '@material-ui/core';
// import { logout } from '../api_services/authentication';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
    secondaryBar: {
        zIndex: 0,
    },
    menuButton: {
        marginLeft: -theme.spacing(1),
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
    avatarIcon: {
        backgroundColor: '#124954',
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    toolbarMargin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
});

function Header(props) {
    const { classes, onDrawerToggle, title } = props;

    return (
        <React.Fragment>
            <Head>
                <title>
                    {title ? title + ' | GWM' : 'GWM'}
                </title>
            </Head>
            <AppBar position="sticky" elevation={2} style={{backgroundColor: '#E8F5F8'}}>
                <Toolbar className={classes.toolbarMargin}>
                    <Grid container spacing={1} alignItems="center">
                        <Hidden smUp>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon color={'primary'}/>
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item xs />
                        <Grid item>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                <Box>
                                    <Typography color={'primary'} align={'right'} style={{fontSize: '12px'}}>
                                        {'Soumya Ranjan Sahoo'}
                                    </Typography>
                                    <Typography color={'primary'} align={'right'} style={{fontSize: '12px'}}>
                                        {'soumya'}
                                    </Typography>
                                </Box>
                                <Button
                                    onClick={() => logout().then(()=>window.location.reload(false))}
                                    variant={'outlined'}
                                    style={{border: 'none'}}
                                    // color={'primary'}
                                >
                                    {
                                        <Avatar className={classes.avatarIcon} >S</Avatar>
                                    }
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/*<AppBar*/}
            {/*    component="div"*/}
            {/*    className={classes.secondaryBar}*/}
            {/*    color="primary"*/}
            {/*    position="static"*/}
            {/*    elevation={0}*/}
            {/*>*/}
            {/*    <Toolbar>*/}
            {/*        <Grid container alignItems="center" spacing={1}>*/}
            {/*            <Grid item xs>*/}
            {/*                <Typography color="textSecondary" variant="h5" component="h1">*/}
            {/*                    {title ? title : ''}*/}
            {/*                </Typography>*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default withStyles(styles)(Header);
