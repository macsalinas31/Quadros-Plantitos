import { useLocation, Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({allowedRoles}) => {
    const location = useLocation();
    const auth = JSON.parse(localStorage.getItem('auth'));
    console.log(auth?.role)

    return(
        auth?.role == 0
            ? <Outlet/>
            : <Navigate to='/unauthorized' state={{from: location}} replace />
    )
}

export default PrivateRoutes;