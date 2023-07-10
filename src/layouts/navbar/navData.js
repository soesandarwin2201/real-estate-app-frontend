import * as BiMap from 'react-icons/bi';
import * as FiHome from 'react-icons/fi';
import * as BsPerson from 'react-icons/bs';

export const navLinks = [
     {
       id: "home",
       path: '/home',
       title: "Home",
     },
     {
       id: "buy",
       path: '/buy',
       title: "Buy/Rent",
     },
     {
       id: "sell",
       path: '/sell',
       title: "Sell",
     },
     {
       id: "agent",
       path: '/agents',
       title: "Agents",
     },
   ];

export const mobile_nav = [
  {
    id: "all",
    path: '/all',
    title: "All",
  },
  {
    id: "buy",
    path: '/buy',
    title: "Buy",
  },
  {
    id: "rent",
    path: '/rent',
    title: "Rent",
  },
  
]

export const footer_nav = [
  {
    id: "home",
    path: '/home',
    title: "Home",
    icon: <FiHome.FiHome />,
    className: 'footer_nav_item',
    linkcss: 'footer_nav_link'
  },
  {
    id: "agents",
    path: '/agents',
    title: "Agents",
    icon: <BsPerson.BsPeople />,
    className: 'footer_nav_item',
    linkcss: 'footer_nav_link'
  },
  {
    id: "sell",
    path: '/sell',
    title: "Sell",
    icon: <FiHome.FiPlus  />,
    className: '',
    linkcss: 'plus'
  },
  {
    id: "chat",
    path: '/chat',
    title: "Chat",
    icon: <BsPerson.BsChatDots  />,
    className: 'footer_nav_item',
    linkcss: 'footer_nav_link'
  },
  {
    id: "signup",
    path: '/signup',
    title: "Sign Up",
    icon: <BsPerson.BsPerson  />,
    className: 'footer_nav_item',
    linkcss: 'footer_nav_link'
  },
]