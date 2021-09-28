import {Home,About} from "../pages"

const AppRoutes = [
    {
        name:"Home",
        path:"/",
        exact:true,
        component:Home
    }
    ,{
        name:"About",
        path:"/about",
        exact:true,
        component:About
    }
]


export default AppRoutes;