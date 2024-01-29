import { createBrowserRouter} from "react-router-dom";
import { Login } from "../pages/login/login";
import { MainPanel } from "../pages/mainPanel/main-panel";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'main-panel',
        element: <MainPanel/>
    }
])