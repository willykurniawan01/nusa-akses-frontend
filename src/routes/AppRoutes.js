import {
  Home,
  About,
  Profile,
  Berita,
  DetailBerita,
  DetailServices,
} from "../pages";

const AppRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    exact: true,
    component: About,
  },
  {
    name: "Profile",
    path: "/profile-perusahaan",
    exact: true,
    component: Profile,
  },

  {
    name: "Berita",
    path: "/berita",
    exact: true,
    component: Berita,
  },
  {
    name: "DetailBerita",
    path: "/berita/:slug",
    exact: true,
    component: DetailBerita,
  },
  {
    name: "DetailServices",
    path: "/services/:id",
    exact: true,
    component: DetailServices,
  },
];

export default AppRoutes;
