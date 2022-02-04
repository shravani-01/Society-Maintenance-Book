import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Add Member",
    path: "/AddMember",
    icon: <IoIcons.IoMdPeople />,
    cName: "admin-nav-text",
  },
  {
    title: "Society Members",
    path: "/AllMembers",
    icon: <FaIcons.FaCartPlus />,
    cName: "admin-nav-text",
  },

  {
    title: "Society Yearly Expense",
    path: "/SocietyYearlyExpense",
    icon: <IoIcons.IoMdPeople />,
    cName: "admin-nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "admin-nav-text",
  },
];
