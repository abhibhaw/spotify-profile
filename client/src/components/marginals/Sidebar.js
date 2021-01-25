import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function MiniDrawer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.logo} src='/favicon.png' alt='spotify logo' />

        <Link className={classes.link} to='/'>
          <i className={`${classes.icon} fas fa-2x fa-user-alt`} />
          <h3 className={classes.menuName}>Profile</h3>
        </Link>
        <Link className={classes.link} to='/tracks'>
          <i className={`${classes.icon} fas fa-2x fa-music`} />
          <h3 className={classes.menuName}>Tracks</h3>
        </Link>
        <Link className={classes.link} to='/artists'>
          <i className={`${classes.icon} fas fa-2x fa-microphone`} />
          <h3 className={classes.menuName}>Artists</h3>
        </Link>
        <Link className={classes.link} to='/recent'>
          <i className={`${classes.icon} fas fa-2x fa-history`} />
          <h3 className={classes.menuName}>Recent</h3>
        </Link>
        <Link className={classes.link} to='/playlist'>
          <i className={`${classes.icon} fas fa-2x fa-play`} />
          <h3 className={classes.menuName}>Playlist</h3>
        </Link>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    position: 'fixed',
    left: 0,
    backgroundColor: '#040306',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minHeight: '80px',
      bottom: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: '100px',
      minHeight: '100vh',
      top: 0,
    },
  },
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  logo: {
    width: '50%',
    height: 'auto',
    position: 'absolute',
    top: 30,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    margin: '20px 0px',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: '15px 10px 10px 10px',
      width: '25%',
      height: '80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  icon: {
    color: '#DCDCDC',
  },
  menuName: {
    color: '#DCDCDC',
    fontSize: 10,
    marginTop: 5,
    marginBottom: 0,
    fontFamily: "'Montserrat', sans-serif",
  },
}));
