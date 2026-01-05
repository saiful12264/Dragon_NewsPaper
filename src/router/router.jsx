import { createBrowserRouter } from "react-router";
import Home from "../layout/Home";
import Auth from "../layout/Auth";
import News from "../layout/News";
import Home1 from "../Page/Home1";
import Category_news from "../Page/Category_news";
import Login from "../Page/Login";
import Register from "../Page/Register";
import PrivateRoute from "../Auth/PrivateRoute";
import Loading from "../Compoent/Loading";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children :[
            {
              path:'/',
              element:<Home1></Home1>    
            },
            {
                path:'/category_news/:id',
                element:<Category_news></Category_news>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement:<Loading></Loading>
            }
        ]
    },
    {
        path:'/auth',
        element:<Auth></Auth>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>

            },
            {
                path:'/auth/register',
                Component:Register
            }
        ]
    },
    {
        path:'/news/:id',
        element:<PrivateRoute>
            <News></News>
        </PrivateRoute>
    }
])