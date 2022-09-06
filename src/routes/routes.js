import Detail from "~/modules/Astronomy/pages/Detail";
import Gallery from "~/modules/Astronomy/pages/Gallery";
import ImageOfDay from "~/modules/Astronomy/pages/ImageOfDay";
import Search from "~/pages/Search";

const { default: Home } = require("~/pages/Home");

const publicRoutes = [
  { path: "/Astronomy-app/", component: Home },
  { path: "/image-of-day", component: ImageOfDay },
  { path: "/:gallery", component: Gallery },
  { path: "/search/:gallery/:search", component: Search },
  { path: "/contents/:gallery/:id", component: Detail },
];

export { publicRoutes };
