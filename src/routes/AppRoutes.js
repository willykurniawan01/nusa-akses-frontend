import {
  Home,
  Profile,
  Berita,
  DetailBerita,
  DetailServices,
  Pages,
  SejarahPerusahaan,
} from "../pages";

const AppRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
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
  {
    name: "Pages",
    path: "/page/:id",
    exact: true,
    component: Pages,
  },
  {
    name: "Pages",
    path: "/sejarah-perusahaan",
    exact: true,
    component: SejarahPerusahaan,
  },
];

export default AppRoutes;
