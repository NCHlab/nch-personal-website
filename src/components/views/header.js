import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {sections.map(section => (
            <Typography variant="h6" className={classes.title}>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={section.url}
                key={section.name}
              >
                {section.name}
              </Link>
            </Typography>
          ))}

          <Button color="inherit">Snakify</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
