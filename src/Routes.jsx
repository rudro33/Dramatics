import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Subscription from "./component/Subscription";


const router = createBrowserRouter([
    {
        path :"/",
        element: <Root></Root>,
        children:[
            {
                path:
                "/",
                element:<Home></Home>
            },
            {
                path:
                "/show",
                element:<About></About>
            },
            {
                path: 
                "/subscription",
                element:<Subscription></Subscription>
            }
        ]
    }
])
export default router;