import React, { useState } from "react";
import { Container, Drawer } from "@mui/material";

import cls from "./mobileNaveDrawer.module.scss"

const MobileNaveDrawer = () => {
    const [state, setState] = useState({
        top: false
    });
    const [login, setLogin] = useState(true)
    const [signup, setSignup] = useState(false)
    const [password, setPassword] = useState(false)

    const showLogin = () => {
        setLogin(true);
        setSignup(false);
        setPassword(false)
    }

    const showSign = () => {
        setLogin(false);
        setSignup(true);
        setPassword(false)
    }

    const showPassword = () => {
        setLogin(false);
        setSignup(false);
        setPassword(true)
    }

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };
    const userDrawerContent = (anchor) => (
        <div
            role="presentation"
        >
            <Container maxWidth="xl">
                <div className={cls.drawer}>
                    <ul className={cls.navLinks}>


                        <li
                            className={`${cls.link} ${cls.maxWidth}`}
                        >
                            <span>
                                {" "}
                                Home{" "}
                            </span>


                        </li>

                        <li
                            className={cls.link}
                        >
                            <span>
                                {" "}
                                Courses <i className="fa-regular fa-angle-down"></i>
                            </span>

                        </li>

                        <li
                            className={cls.link}
                        >
                            <span>
                                {" "}
                                Pages
                            </span>
                        </li>

                        <li
                            className={cls.link}
                        >
                            <span>
                                {" "}
                                Blog <i className="fa-regular fa-angle-down"></i>
                            </span>

                        </li>

                        <li
                            className={cls.link}
                        >
                            <span>
                                {" "}
                                Shop
                            </span>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
    return (
        <div className={cls.mobileNav}>
            <span onClick={toggleDrawer("top", true)}>
                <svg width="25" height="17" viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="1" fill="currentColor"></rect>
                    <rect y="8" width="15" height="1" fill="currentColor"></rect>
                    <rect y="16" width="20" height="1" fill="currentColor"></rect>
                </svg>
            </span>
            <Drawer
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
            >
                {userDrawerContent("top")}
            </Drawer>
        </div>
    )
}

export default MobileNaveDrawer