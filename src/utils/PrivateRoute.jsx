import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuthHook from "../hooks/useAuthHook";
const PrivateRoute = () => {
    const [auth, setAuth] = useState(false);
    const { login, logInfo } = UseAuthHook();
    if (logInfo && logInfo.success === true) {
        setAuth(true);
        console.log(`find auth ${auth}`)
    }
    return (
        !auth
            ?
            <Outlet />
            :
            <Navigate to="/login" />

    )
}
export default PrivateRoute;