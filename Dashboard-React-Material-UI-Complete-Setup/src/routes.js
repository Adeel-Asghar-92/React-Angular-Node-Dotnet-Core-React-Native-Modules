import Buttons from "views/Components/Buttons.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Charts from "views/Charts/Charts.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import ErrorPage from "views/Pages/ErrorPage.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Icons from "views/Components/Icons.jsx";
import LockScreenPage from "views/Pages/LockScreenPage.jsx";
import LoginPage from "views/Pages/LoginPage.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Panels from "views/Components/Panels.jsx";
import PricingPage from "views/Pages/PricingPage.jsx";
import RTLSupport from "views/Pages/RTLSupport.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import SweetAlert from "views/Components/SweetAlert.jsx";
import TimelinePage from "views/Pages/Timeline.jsx";
import Typography from "views/Components/Typography.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import Wizard from "views/Forms/Wizard.jsx";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "???????? ??????????????",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "??????????",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/pricing-page",
        name: "Pricing Page",
        rtlName: "????????????????",
        mini: "PP",
        rtlMini: "??",
        component: PricingPage,
        layout: "/auth"
      },
      {
        path: "/rtl-support-page",
        name: "RTL Support",
        rtlName: "?????????? ??????",
        mini: "RS",
        rtlMini: "????",
        component: RTLSupport,
        layout: "/rtl"
      },
      {
        path: "/timeline-page",
        name: "Timeline Page",
        rtlName: "???????????????? ????????????",
        mini: "T",
        rtlMini: "????",
        component: TimelinePage,
        layout: "/admin"
      },
      {
        path: "/login-page",
        name: "Login Page",
        rtlName: "?????????????????? ????????????",
        mini: "L",
        rtlMini: "????????",
        component: LoginPage,
        layout: "/auth"
      },
      {
        path: "/register-page",
        name: "Register Page",
        rtlName: "??????????",
        mini: "R",
        rtlMini: "????",
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        rtlName: "???????? ????????????",
        mini: "LS",
        rtlMini: "????????",
        component: LockScreenPage,
        layout: "/auth"
      },
      {
        path: "/user-page",
        name: "User Profile",
        rtlName: "?????? ???????????? ????????????????",
        mini: "UP",
        rtlMini: "????",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/error-page",
        name: "Error Page",
        rtlName: "???????? ??????????",
        mini: "E",
        rtlMini: "????????????",
        component: ErrorPage,
        layout: "/auth"
      }
    ]
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "????????????????",
    icon: Apps,
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        rtlName: "???????????? ?????????? ??????????????????",
        mini: "MC",
        rtlMini: "??",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            rtlName: "????????",
            mini: "B",
            rtlMini: "??",
            component: Buttons,
            layout: "/admin"
          }
        ]
      },
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "????????",
        mini: "B",
        rtlMini: "??",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        rtlName: "???????? ????????????",
        mini: "GS",
        rtlMini: "????",
        component: GridSystem,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        rtlName: "??????????",
        mini: "P",
        rtlMini: "??",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        rtlName: "?????????? ??????????",
        mini: "SA",
        rtlMini: "??????",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "??????????????",
        mini: "N",
        rtlMini: "??",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "????????????",
        mini: "I",
        rtlMini: "??",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "??????????",
        mini: "T",
        rtlMini: "??",
        component: Typography,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Forms",
    rtlName: "????????????????",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        rtlName: "?????????? ??????????",
        mini: "RF",
        rtlMini: "????",
        component: RegularForms,
        layout: "/admin"
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        rtlName: "?????????? ??????????",
        mini: "EF",
        rtlMini: "??????",
        component: ExtendedForms,
        layout: "/admin"
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        rtlName: "?????????? ???????????? ???? ??????????",
        mini: "VF",
        rtlMini: "????",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Wizard",
        rtlName: "????????",
        mini: "W",
        rtlMini: "??",
        component: Wizard,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "??????????????",
    icon: GridOn,
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "???????????? ??????????",
        mini: "RT",
        rtlMini: "????",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "?????????? ??????????",
        mini: "ET",
        rtlMini: "??????",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        rtlName: "???? ?????? ??????????????",
        mini: "RT",
        rtlMini: "????",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Maps",
    rtlName: "??????????",
    icon: Place,
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        rtlName: "?????????? ????????",
        mini: "GM",
        rtlMini: "????",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-maps",
        name: "Full Screen Map",
        rtlName: "?????????? ?????????? ????????????",
        mini: "FSM",
        rtlMini: "??????",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-maps",
        name: "Vector Map",
        rtlName: "?????????? ????????????",
        mini: "VM",
        rtlMini: "????",
        component: VectorMap,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/widgets",
    name: "Widgets",
    rtlName: "????????????????",
    icon: WidgetsIcon,
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "???????????? ????????????????",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "??????????????",
    icon: DateRange,
    component: Calendar,
    layout: "/admin"
  }
];
export default dashRoutes;
