import React, { useState, useEffect, useContext } from "react";
import { Box, Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { useHistory, withRouter } from "react-router-dom";
import classNames from "classnames";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
// import Dot from "./components/Dot";

// context

// import {
//   useLayoutState,
//   useLayoutDispatch,
//   toggleSidebar,
// } from "../../context/LayoutContext";
// import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import swal from "sweetalert";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
// import { signOut, useUserDispatch } from "../../context/UserContext";
import AppContext from "../../store/AppContext/AppContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Typography",
    link: "/app/typography",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
  {
    id: 3,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  // {
  //   id: 4,
  //   label: "UI Elements",
  //   link: "/app/ui",
  //   icon: <UIElementsIcon />,
  //   children: [
  //     { label: "Icons", link: "/app/ui/icons" },
  //     { label: "Charts", link: "/app/ui/charts" },
  //     { label: "Maps", link: "/app/ui/maps" },
  //   ],
  // },
  // { id: 5, type: "divider" },
  // { id: 6, type: "title", label: "HELP" },
  // { id: 7, label: "Library", link: "", icon: <LibraryIcon /> },
  // { id: 8, label: "Support", link: "", icon: <SupportIcon /> },
  // { id: 9, label: "FAQ", link: "", icon: <FAQIcon /> },
  // { id: 10, type: "divider" },
  // { id: 11, type: "title", label: "PROJECTS" },
  // {
  //   id: 12,
  //   label: "My recent",
  //   link: "",
  //   icon: <Dot size="small" color="warning" />,
  // },
  // {
  //   id: 13,
  //   label: "Starred",
  //   link: "",
  //   icon: <Dot size="small" color="primary" />,
  // },
  // {
  //   id: 14,
  //   label: "Background",
  //   link: "",
  //   icon: <Dot size="small" color="secondary" />,
  // },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();
  const { sideNavOpen, setsideNavOpen, signOut } = useContext(AppContext);
  const bottomStructure = [
    {
      id: 4,
      label: "Collapse",
      type: "action",
      icon: <ArrowBackIcon />,
      action: () => setsideNavOpen(false),
      hidden: !sideNavOpen,
    },
    {
      id: 5,
      label: "Expand",
      type: "action",
      icon: <MenuRoundedIcon />,
      action: () => setsideNavOpen(true),
      hidden: sideNavOpen,
    },
    {
      id: 6,
      label: "Settings",
      type: "action",
      icon: <TuneRoundedIcon />,
      action: () => swal("layoutDispatch"),
    },
    {
      id: 7,
      label: "Logout",
      type: "action",
      icon: <ExitToAppRoundedIcon />,
      action: () => signOut(),
      color: "danger",
    },
  ];

  // console.log(bottomStructure);
  // global
  // var { sideNavOpen } = useLayoutState();
  // var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });
  useEffect(() => {
    console.log(sideNavOpen);
  }, [sideNavOpen]);
  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: sideNavOpen,
        [classes.drawerClose]: !sideNavOpen,
      })}
      onClose={() => setsideNavOpen(false)}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: sideNavOpen,
          [classes.drawerClose]: !sideNavOpen,
        }),
      }}
      open={sideNavOpen}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => setsideNavOpen(false)}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            sideNavOpen={sideNavOpen}
            {...link}
          />
        ))}
      </List>
      <Box mt="auto">
        <List className={classes.sidebarList}>
          {bottomStructure.map((link) => (
            <SidebarLink
              key={link.id}
              location={location}
              sideNavOpen={sideNavOpen}
              {...link}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
