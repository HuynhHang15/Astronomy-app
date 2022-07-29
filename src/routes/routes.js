import Detail from "~/modules/Astronomy/pages/Detail";
import Gallery from "~/modules/Astronomy/pages/Gallery";
import Search from "~/pages/Search";

const { default: Home } = require("~/pages/Home");

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/search/:search", component: Search },
  { path: "/:gallery", component: Gallery },
  {path: "/contents/:gallery/:id", component: Detail}
  
];

export { publicRoutes };
