import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

export const SidebarData = [
    {
        title: "Inicio",
        path: "/inicio",
        icon: <HomeIcon />,
        cName: "nav-text"
    },
    {
        title: "Salir",
        path: "/logout",
        icon: <LogoutIcon />,
        cName: "nav-text"
    }
];
