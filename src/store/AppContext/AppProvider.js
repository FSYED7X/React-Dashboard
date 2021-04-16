import React, { useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { clearSessionStorage, clearStorage } from "../../utils/storage";
import { getUserDetails } from "../../utils/user";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const history = useHistory();
  const [sideNavOpen, setsideNavOpen] = useState(false);
  const [user, setUser] = useState(getUserDetails());

  function signOut() {
    swal({
      title: "Confirm to logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setUser(false);
        clearStorage();
        clearSessionStorage();
        history.push("/login");
      }
    });
  }

  const contextValue = { sideNavOpen, setsideNavOpen, signOut, user, setUser };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
