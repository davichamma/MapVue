import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages

const Profile = () =>
  import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/maps",
    children: [
      {
        path: "profile",
        name: "profile",
        component: Profile,
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
      },
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
