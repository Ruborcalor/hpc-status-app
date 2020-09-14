import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Switch, Route } from "react-router-dom";

import DnsIcon from '@material-ui/icons/Dns';
import GroupIcon from '@material-ui/icons/Group';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import StorageIcon from '@material-ui/icons/Storage';

// import Hello from "./Hello.js";
// import PartitionCardGrid from "./components/PartitionCardGrid";
import SharedPartitions from "./SharedPartitions";
import PrivatePartitions from "./PrivatePartitions";
import Fairshare from "./Fairshare";
import Storage from "./Storage";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  active: {
    backgroundColor: theme.palette.info.light
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  const drawerElements = [
    {
      label: "Shared Partitions",
      icon: <DnsIcon/>,
      to: "shared-partitions"
    },
    {
      label: "Private Partitions",
      icon: <GroupIcon/>,
      to: "private-partitions"
    },
    {
      label: "Fairshare",
      icon: <AccountBalanceIcon/>,
      to: 'fairshare'
    },
    {
      label: "Storage",
      icon: <StorageIcon/>,
      to: "storage"
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            System Status App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {drawerElements.map((drawerObject, index) => (
            <ListItem button exact component={NavLink} to={drawerObject.to} activeClassName={classes.active} key={drawerObject.label}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemIcon>{drawerObject.icon}</ListItemIcon>
              <ListItemText primary={drawerObject.label} />
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        {/* <List> */}
        {/*   {['All mail', 'Trash', 'Spam'].map((text, index) => ( */}
        {/*     <ListItem button key={text}> */}
        {/*       <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
        {/*       <ListItemText primary={text} /> */}
        {/*     </ListItem> */}
        {/*   ))} */}
        {/* </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/shared-partitions" component={SharedPartitions} />
          <Route path="/private-partitions" component={PrivatePartitions} />
          <Route path="/fairshare" component={Fairshare} />
          <Route path="/storage" component={Storage} />
        </Switch>

      </main>
    </div>
  );
}
