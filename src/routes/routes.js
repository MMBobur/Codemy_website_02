import Layout from "../components/Layout/index.jsx";

import About from "../pages/about/index.jsx";
import Aforizmlar from "../pages/aforizmlar/index.jsx";
import Corusel from "../pages/corusel/index.jsx";
import DasturlashTillari from "../pages/dasturlashTillari/index.jsx";
import Kurslar from "../pages/kurslar/index.jsx";
import Staffs from "../pages/staffs/index.jsx";
import Video from "../pages/video/index.jsx";

import AboutView from "../containers/about/about-view/index.jsx";
import AboutEdit from "../containers/about/about-edit/index.jsx";
import AboutAdd from "../containers/about/about-add/index.jsx";

import AforizmlarView from "../containers/aforizmlar/aforizmlar-view/index.jsx";
import AforizmlarEdit from "../containers/aforizmlar/aforizmlar-edit/index.jsx";
import AforizmlarAdd from "../containers/aforizmlar/aforizmlar-add/index.jsx";

import CoruselView from "../containers/corusel/corusel-view/index.jsx";
import CoruselEdit from "../containers/corusel/corusel-edit/index.jsx";
import CoruselAdd from "../containers/corusel/corusel-add/index.jsx";

import DasturlashTillariView from "../containers/dasturlashTillari/dasturlashTillari-view/index.jsx";
import DasturlashTillariEdit from "../containers/dasturlashTillari/dasturlashTillari-edit/index.jsx";
import DasturlashTillariAdd from "../containers/dasturlashTillari/dasturlashTillari-add/index.jsx";

import KurslarView from "../containers/kurslar/kurslar-view/index.jsx";
import KurslarEdit from "../containers/kurslar/kurslar-edit/index.jsx";
import KurslarAdd from "../containers/kurslar/kurslar-add/index.jsx";

import StaffsView from "../containers/staffs/staffs-view/index.jsx";
import StaffsEdit from "../containers/staffs/staffs-edit/index.jsx";
import Single from '../containers/staffs/staffs-edit/single/index'
import StaffsAdd from "../containers/staffs/staffs-add/index.jsx";

import VideoView from "../containers/video/video-view/index.jsx";
import VideoEdit from "../containers/video/video-edit/index.jsx";
import VideoAdd from "../containers/video/video-add/index.jsx";

export const routes = [
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <About />,
  //     },
  //     {
  //       path: "/aforizmlar",
  //       element: <Aforizmlar />,
  //     },
  //     {
  //       path: "/corusel",
  //       element: <Corusel />,
  //     },
  //     {
  //       path: "/dasturlashtillari",
  //       element: <DasturlashTillari />,
  //     },
  //     {
  //       path: "/kurslar",
  //       element: <Kurslar />,
  //     },
  //     {
  //       path: "/staffs",
  //       element: <Staffs />,
  //     },
  //     {
  //       path: "/video",
  //       element: <Video />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutView />,
      },
      {
        path: "/about/edit",
        element: <AboutEdit />,
      },
      {
        path: "/about/add",
        element: <AboutAdd />,
      },
    ],
  },
  {
    path: "/aforizmlar",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AforizmlarView />,
      },
      {
        path: "/aforizmlar/edit",
        element: <AforizmlarEdit />,
      },
      {
        path: "/aforizmlar/add",
        element: <AforizmlarAdd />,
      },
    ],
  },
  {
    path: "/corusel",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CoruselView />,
      },
      {
        path: "/corusel/edit",
        element: <CoruselEdit />,
      },
      {
        path: "/corusel/add",
        element: <CoruselAdd />,
      },
    ],
  },
  {
    path: "/dasturlashtillari",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DasturlashTillariView />,
      },
      {
        path: "/dasturlashtillari/edit",
        element: <DasturlashTillariEdit />,
      },
      {
        path: "/dasturlashtillari/add",
        element: <DasturlashTillariAdd />,
      },
    ],
  },
  {
    path: "/kurslar",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <KurslarView />,
      },
      {
        path: "/kurslar/edit",
        element: <KurslarEdit />,
      },
      {
        path: "/kurslar/add",
        element: <KurslarAdd />,
      },
    ],
  },
  {
    path: "/staffs",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StaffsView />,
      },
      {
        path: "/staffs/edit",
        element: <StaffsEdit />,
      },
      {
        path: "/staffs/add",
        element: <StaffsAdd />,
      },
    ],
  },
  {
    path: "/video",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <VideoView />,
      },
      {
        path: "/video/edit",
        element: <VideoEdit />,
      },
      {
        path: "/video/add",
        element: <VideoAdd />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StaffsEdit />,
      },
      {
        path: "/staffs/edit/one/:id",
        element: <Single />,
      },
    ],
  },

];
