import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div>ffff</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;