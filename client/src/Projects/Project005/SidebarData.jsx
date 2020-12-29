import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import DashboardIcon from "@material-ui/icons/Dashboard";
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import TransferWithinAStationOutlinedIcon from '@material-ui/icons/TransferWithinAStationOutlined';
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
 
  {
    title: "Wallet",
    icon: <AccountBalanceWalletOutlinedIcon />,
    link: "/",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Admin",
    icon: <DevicesOutlinedIcon />,
    link: "/admin",
  },
  {
    title: "Transfer",
    icon: <TransferWithinAStationOutlinedIcon />,
    link: "/transfer",
  },
  {
    title: "Withdraw",
    icon: <TransferWithinAStationOutlinedIcon />,
    link: "/withdraw",
  },
];