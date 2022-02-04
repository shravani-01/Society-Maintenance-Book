import React from "react";
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconName } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

export const MemberSidebarData = [
  {
    title: "Society Members",
    path: "/AllSocietyMembers",
    icon: <IoIcons.IoMdPeople />,
    cName: "admin-nav-text",
  },

  {
    title: "Yearly Expense",
    path: "/YearlyExpense",
    icon: <IoIcons.IoMdPeople />,
    cName: "admin-nav-text",
  },

  {
    title: "Society Yearly Expense",
    path: "/SocietyYearlyExpense",
    icon: <IoIcons.IoMdPeople />,
    cName: "admin-nav-text",
  },

  {
    title: "My Maintenance",
    path: "/MyMaintenance",
    icon: <i class="fas fa-address-card"></i>,
    cName: "admin-nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "admin-nav-text",
  },
];
