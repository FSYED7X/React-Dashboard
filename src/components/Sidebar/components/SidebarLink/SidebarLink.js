import React, { useContext, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Inbox as InboxIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Dot from "../Dot";
import AppContext from "../../../../store/AppContext/AppContext";

export default function SidebarLink({
  link,
  icon,
  label,
  children,
  location,
  nested,
  type,
  action,
  hidden,
  color,
}) {
  var classes = useStyles();
  const { sideNavOpen, setsideNavOpen, signOut } = useContext(AppContext);

  // local
  var [isOpen, setIsOpen] = useState(false);
  var isLinkActive =
    link &&
    (location.pathname === link || location.pathname.indexOf(link) !== -1);

  if (hidden) {
    return null;
  }

  if (type === "title")
    return (
      <Typography
        className={classnames(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !sideNavOpen,
        })}
      >
        {label}
      </Typography>
    );

  if (type === "divider") return <Divider className={classes.divider} />;

  if (type === "action") {
    return (
      <ListItem button onClick={action} className={classes.link}>
        <ListItemIcon
          className={classnames(classes.linkIcon, classes[color], {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText,classes[color], {
              [classes.linkTextHidden]: !sideNavOpen,
            }),
          }}
          primary={label}
        />
      </ListItem>
    );
  }

  if (!children)
    return (
  <Box py={0.5}>
        <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested,
          }),
        }}
        // disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, classes[color], {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {nested ? <Dot color={isLinkActive && "primary"} /> : icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, classes[color], {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !sideNavOpen,
            }),
          }}
          primary={label}
        />
      </ListItem>
  </Box>

    );

  return (
    <Box py={0.5}>
      <ListItem
        button
        component={link && Link}
        onClick={toggleCollapse}
        className={classes.link}
        to={link}
        // disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon ? icon : <InboxIcon />}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !sideNavOpen,
            }),
          }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && sideNavOpen}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map((childrenLink) => (
              <SidebarLink
                key={childrenLink && childrenLink.link}
                location={location}
                sideNavOpen={sideNavOpen}
                classes={classes}
                nested
                {...childrenLink}
              />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  );

  // ###########################################################

  function toggleCollapse(e) {
    if (sideNavOpen) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }
}
