import { Home, About, Profile, Berita } from "../pages";

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
];

export default AppRoutes;
