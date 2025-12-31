import { createBrowserRouter } from "react-router";
import Home from "../layout/Home";
import Auth from "../layout/Auth";
import News from "../layout/News";
import Home1 from "../Page/Home1";
import Category_news from "../Page/Category_news";

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
                element:<Category_news></Category_news>
            }
        ]
    },
    {
        path:'/auth',
        element:<Auth></Auth>
    },
    {
        path:'/news',
        element:<News></News>
    }
])